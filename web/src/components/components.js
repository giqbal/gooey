import Page from './page'
import Grid from './grid'
import Teaser from './teaser'
import Feature from './feature'
import HeroImage from './heroImage'
import ComponentNotFound from './component_not_found'

const ComponentList = {
  page: Page,
  grid: Grid,
  teaser: Teaser,
  feature: Feature,
  hero_image: HeroImage,
}

const Components = type => {
  if (typeof ComponentList[type] === 'undefined') {
    return ComponentNotFound
  }
  return ComponentList[type]
}

export default Components
