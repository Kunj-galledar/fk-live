import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyDwPD7ezU7pUUjvbK912KXwrI4vG6A4_MM","authDomain":"nuxt-firebase-authentica-7e03e.firebaseapp.com","projectId":"nuxt-firebase-authentica-7e03e","storageBucket":"nuxt-firebase-authentica-7e03e.appspot.com","messagingSenderId":"788072242403","appId":"1:788072242403:web:bb2a2ed7f19f3c0d3e79d6","measurementId":"G-0KKGKBZLEG"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}