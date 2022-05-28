const {environment} = require('@rails/webpacker')
const {VueLoaderPlugin} = require('vue-loader')
const vue = require('./loaders/vue')

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')



environment.plugins.prepend('VuetifyLoaderPlugin', new VuetifyLoaderPlugin())
environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment
