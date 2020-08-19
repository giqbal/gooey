import Page from './page'
import GridComp from './grid'
import FooterLinkList from './footerLinkList'
import SocialLink from './socialLink'
import Teaser from './teaser'
import Feature from './feature'
import HeroImage from './heroImage'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page,
  grid: GridComp,
  teaser: Teaser,
  feature: Feature,
  hero_image: HeroImage,
  footer_link_list: FooterLinkList,
  social_media_link: SocialLink,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
