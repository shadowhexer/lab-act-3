/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; 

const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi', 
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: 'dark',
    },
  });

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default vuetify;
