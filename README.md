# Vue Directive for Two-way Binding Pure UI Components

A custom Vue 3 directive that makes two-way binding [Pure UI components](https://shoelace.style) easier.

<details>
<summary>Instructions for Vue 2 users</summary>

If you're looking for a directive that's compatible with Vue 2, install version 1 of this package:

```bash
npm install pure-v-model@1
```

Then [follow these instructions](https://github.com/shoelace-style/vue-sl-model/tree/77cac5afd36bd6e3321b0a738e3c1751ff006158#vue-directive-for-two-way-binding-shoelace-components) instead.

</details>

## Usage

Install the directive with this command.

```sh
npm install pure-v-model
```

Next, import the directive into your app and enable it like this.

```js
import "pure-uikit/dist/themes/light.css"
import "pure-uikit/dist/components/input/input"

import PureUIModelDirective from 'pure-v-model'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(PureUIModelDirective)

app.config.compilerOptions.isCustomElement = tag => tag.startsWith('sl-')

// If using Vite, the above "isCustomElement" needs to be deleted and defined in vite.config.js
// See below for an example vite.config.js

app.mount('#app')
```

Now you can use the `v-sl-model` directive to keep your data in sync!

```html
<sl-input v-sl-model="name"></sl-input>
```

## Why is this necessary?

Currently, there's [no support for v-model on custom elements](https://github.com/vuejs/vue/issues/7830) in Vue. You can handle two-way binding manually, but's it rather verbose.

```html
<!-- This doesn't work -->
<sl-input v-model="name"></sl-input>

<!-- This works, but it's a bit longer -->
<sl-input :value="name" @input="name = $event.target.value"></sl-input>
```

This utility solves this problem by creating a custom directive that works just like `v-model` but for Pure UI components.

## Using Vite

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('sl-')
        }
      },
    })
  ]
})
```
