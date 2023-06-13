import { App } from 'vue'
import Progress from './progress/index.vue'
import SvgIcon from './svg-icon/index.vue'

const allGlobalComponent: any = { Progress, SvgIcon }

export default {
  install(app: App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
  }
}
