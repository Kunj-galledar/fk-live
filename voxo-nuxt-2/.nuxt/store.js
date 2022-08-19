import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('..\\store\\index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

  resolveStoreModules(require('..\\store\\modules\\banners.js'), 'modules/banners.js')
  resolveStoreModules(require('..\\store\\modules\\blogData.js'), 'modules/blogData.js')
  resolveStoreModules(require('..\\store\\modules\\cart.js'), 'modules/cart.js')
  resolveStoreModules(require('..\\store\\modules\\categories.js'), 'modules/categories.js')
  resolveStoreModules(require('..\\store\\modules\\categoryMenu.js'), 'modules/categoryMenu.js')
  resolveStoreModules(require('..\\store\\modules\\clickEvents.js'), 'modules/clickEvents.js')
  resolveStoreModules(require('..\\store\\modules\\compare.js'), 'modules/compare.js')
  resolveStoreModules(require('..\\store\\modules\\filters.js'), 'modules/filters.js')
  resolveStoreModules(require('..\\store\\modules\\firebase.js'), 'modules/firebase.js')
  resolveStoreModules(require('..\\store\\modules\\footerLinks.js'), 'modules/footerLinks.js')
  resolveStoreModules(require('..\\store\\modules\\homeSliders.js'), 'modules/homeSliders.js')
  resolveStoreModules(require('..\\store\\modules\\information.js'), 'modules/information.js')
  resolveStoreModules(require('..\\store\\modules\\layout.js'), 'modules/layout.js')
  resolveStoreModules(require('..\\store\\modules\\menu.js'), 'modules/menu.js')
  resolveStoreModules(require('..\\store\\modules\\popularCards.js'), 'modules/popularCards.js')
  resolveStoreModules(require('..\\store\\modules\\products.js'), 'modules/products.js')

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
      '..\\store\\index.js',
      '..\\store\\modules\\banners.js',
      '..\\store\\modules\\blogData.js',
      '..\\store\\modules\\cart.js',
      '..\\store\\modules\\categories.js',
      '..\\store\\modules\\categoryMenu.js',
      '..\\store\\modules\\clickEvents.js',
      '..\\store\\modules\\compare.js',
      '..\\store\\modules\\filters.js',
      '..\\store\\modules\\firebase.js',
      '..\\store\\modules\\footerLinks.js',
      '..\\store\\modules\\homeSliders.js',
      '..\\store\\modules\\information.js',
      '..\\store\\modules\\layout.js',
      '..\\store\\modules\\menu.js',
      '..\\store\\modules\\popularCards.js',
      '..\\store\\modules\\products.js',
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
