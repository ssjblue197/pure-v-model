import "pure-uikit/dist/themes/light.css"
import "pure-uikit/dist/components/input/input"

import PureUIModelDirective from 'pure-v-model'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(PureUIModelDirective)

// app.config.compilerOptions.isCustomElement = tag => tag.startsWith('sl-')
// ^ Not needed. Defined in vite.config.js

app.mount('#app')