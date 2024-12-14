// Element Plus 组件按需导入
import type { App } from 'vue'
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElMessage,
  ElCheckbox
} from 'element-plus'

// 导入必要的样式
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/form/style/css'
import 'element-plus/es/components/form-item/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/checkbox/style/css'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox
]

// 消息提示等服务组件
const plugins = [
  ElMessage
]

export function setupElementPlus(app: App) {
  // 注册组件
  components.forEach(component => {
    app.component(component.name, component)
  })
  
  // 注册插件
  plugins.forEach(plugin => {
    app.use(plugin)
  })
}
