// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Vue from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue'
import {InertiaProgress} from '@inertiajs/progress'
import {vuetify} from './vuetify'

InertiaProgress.init()

createInertiaApp({
    resolve: name => require(`./Pages/${name}`),
    setup({el, App, props, plugin}) {
        Vue.use(plugin)

        new Vue({
            vuetify,
            render: h => h(App, props),
        }).$mount(el)
    },
})