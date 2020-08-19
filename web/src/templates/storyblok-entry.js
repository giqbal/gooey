import React from 'react'
import Components from '../components/components.js'
import Navi from '../components/navi.js'
import Footer from '../components/footer'

class StoryblokEntry extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.story.uuid === props.pageContext.story.uuid) {
      return null
    }

    return StoryblokEntry.prepareStory(props)
  }

  static prepareStory(props) {
    const story = Object.assign({}, props.pageContext.story)
    const globalNavi = Object.assign({}, props.pageContext.globalNavi)
    const footer = Object.assign({}, props.pageContext.footer)
    story.content = JSON.parse(story.content)
    globalNavi.content = JSON.parse(globalNavi.content)
    footer.content = JSON.parse(footer.content)

    return { story, globalNavi, footer }
  }

  constructor(props) {
    super(props)

    this.state = StoryblokEntry.prepareStory(props)
  }

  render() {
    let content = this.state.story.content
    let globalNavi = this.state.globalNavi.content
    let footer = this.state.footer.content

    return (
      <div>
        <Navi blok={globalNavi} />
        {React.createElement(Components(content.component), { key: content._uid, blok: content })}
        <Footer blok={footer} />
      </div>
    )
  }
}

export default StoryblokEntry
