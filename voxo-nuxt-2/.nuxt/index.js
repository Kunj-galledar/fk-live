import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_617fc47a from 'nuxt_plugin_plugin_617fc47a' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_vuescrollto_25ad6e3a from 'nuxt_plugin_vuescrollto_25ad6e3a' // Source: .\\vue-scrollto.js (mode: 'client')
import nuxt_plugin_workbox_72635bfc from 'nuxt_plugin_workbox_72635bfc' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_8c5fb6fc from 'nuxt_plugin_metaplugin_8c5fb6fc' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_5f8668c8 from 'nuxt_plugin_pluginutils_5f8668c8' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_4d8fe413 from 'nuxt_plugin_pluginrouting_4d8fe413' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_2af2b83c from 'nuxt_plugin_pluginmain_2af2b83c' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_axios_747bde66 from 'nuxt_plugin_axios_747bde66' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_index_03d4a1d6 from 'nuxt_plugin_index_03d4a1d6' // Source: .\\firebase\\index.js (mode: 'all')
import nuxt_plugin_serviceauthinitialize_f76b24ac from 'nuxt_plugin_serviceauthinitialize_f76b24ac' // Source: .\\firebase\\service.auth.initialize.js (mode: 'all')
import nuxt_plugin_plugins_73575e4d from 'nuxt_plugin_plugins_73575e4d' // Source: ..\\plugins\\plugins.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Buy VOXO - eCommerce VueJs Nuxt + Admin + Email  + Invoice Template by PixelStrap on ThemeForest.  VOXO – Multi-Purpose Responsive Ecommerce VueJs Nuxt Theme VOXO Ecommerce Theme with Multipurpose demos. "},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.png"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.googleapis.com"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.googleapis.com"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Rubik:wght@400;500;600;700&display=swap"},{"rel":"stylesheet","id":"bootstrap-link","class":"nuxt-bootstrap","href":"\u002Fvoxo\u002Fcss\u002Fbootstrap.min.css"}],"script":[{"src":"https:\u002F\u002Fcheckout.stripe.com\u002Fcheckout.js"},{"src":"https:\u002F\u002Fcdn.scaleflex.it\u002Fplugins\u002Fjs-cloudimage-360-view\u002F3.0.3\u002Fjs-cloudimage-360-view.min.js"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_617fc47a === 'function') {
    await nuxt_plugin_plugin_617fc47a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_25ad6e3a === 'function') {
    await nuxt_plugin_vuescrollto_25ad6e3a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_72635bfc === 'function') {
    await nuxt_plugin_workbox_72635bfc(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_8c5fb6fc === 'function') {
    await nuxt_plugin_metaplugin_8c5fb6fc(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_5f8668c8 === 'function') {
    await nuxt_plugin_pluginutils_5f8668c8(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_4d8fe413 === 'function') {
    await nuxt_plugin_pluginrouting_4d8fe413(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_2af2b83c === 'function') {
    await nuxt_plugin_pluginmain_2af2b83c(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_747bde66 === 'function') {
    await nuxt_plugin_axios_747bde66(app.context, inject)
  }

  if (typeof nuxt_plugin_index_03d4a1d6 === 'function') {
    await nuxt_plugin_index_03d4a1d6(app.context, inject)
  }

  if (typeof nuxt_plugin_serviceauthinitialize_f76b24ac === 'function') {
    await nuxt_plugin_serviceauthinitialize_f76b24ac(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_plugins_73575e4d === 'function') {
    await nuxt_plugin_plugins_73575e4d(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
