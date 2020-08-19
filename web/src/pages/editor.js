import React from 'react'
import Components from '../components/components.js'
import SbEditable from 'storyblok-react'
import config from '../../gatsby-config'
import Navi from '../components/navi.js'
import Footer from '../components/footer'

const sbConfigs = config.plugins.filter(item => {
  return item.resolve === 'gatsby-source-storyblok'
})
const sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}

const loadStoryblokBridge = function (cb) {
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = { story: null, globalNavi: { content: {} }, footer: { content: {} } }
  }

  componentDidMount() {
    loadStoryblokBridge(() => {
      this.initStoryblokEvents()
    })
  }

  loadStory() {
    window.storyblok.get(
      {
        slug: window.storyblok.getParam('path'),
        version: 'draft',
        resolve_relations: sbConfig.options.resolveRelations || [],
      },
      data => {
        this.setState({ story: data.story })
        this.loadGlobalNavi(data.story.lang)
        this.loadFooter(data.story.lang)
      }
    )
  }

  loadGlobalNavi(lang) {
    const language = lang === 'default' ? '' : lang + '/'
    window.storyblok.get(
      {
        slug: `${language}global-navi`,
        version: 'draft',
      },
      data => {
        this.setState({ globalNavi: data.story })
      }
    )
  }

  loadFooter(lang) {
    const language = lang === 'default' ? '' : lang + '/'
    window.storyblok.get(
      {
        slug: `${language}footer`,
        version: 'draft',
      },
      data => {
        this.setState({ footer: data.story })
      }
    )
  }

  initStoryblokEvents() {
    this.loadStory()

    let sb = window.storyblok

    sb.on(['change', 'published'], payload => {
      this.loadStory()
    })

    sb.on('input', payload => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id)
        this.setState({ story: payload.story })
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return <div></div>
    }

    let content = this.state.story.content
    let globalNavi = this.state.globalNavi.content
    let footer = this.state.footer.content

    return (
      <SbEditable content={content}>
        <div>
          <Navi blok={globalNavi} />
          {React.createElement(Components(content.component), { key: content._uid, blok: content })}
          <Footer blok={footer} />
        </div>
      </SbEditable>
    )
  }
}

export default StoryblokEntry
