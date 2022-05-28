import '@mdi/font/css/materialdesignicons.css'
import Vue from "vue";
// import VuetifyTransitions from 'vuetify/lib/components/transitions'
// import VApp from '@vuetify/components/VApp'
import Vuetify from "vuetify/lib/framework";
// import VuetifyDirectives from 'vuetify/es5/directives'
import colors from 'vuetify/lib/util/colors'
import es from 'vuetify/lib/locale/es'
Vue.use(Vuetify);
const vuetify = new Vuetify({
    lang: {
        current: 'es',
        locales: { es },

    },
  icons: {
    iconfont: 'mdi'
  },

  components: {

    Vuetify
  },
  // directives: VuetifyDirectives,
  theme: {

    themes: {
      light: {
        accent: colors.pink.base,
        primary: colors.blue.darken2
      },
      dark:{

        accent: colors.pink.base,
        primary: colors.blue.darken2
      }
    }
  },
  // transitions: VuetifyTransitions
});
export {
  vuetify
}
