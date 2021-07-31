import { colors } from 'vuetify/lib'
import { Theme } from './binding'

// Sapphire Theme
export const sapphireTheme: Theme = {
  name: 'sapphire',
  light: {
    primary: colors.blue.base,
    secondary: colors.blue.lighten4,
    accent: colors.blue.accent1,
    success: colors.green.darken2,
    error: colors.red.darken2,
    warning: colors.orange.darken2,
    info: colors.blue.darken2,
    notbuilt: colors.blue.darken2,
    aborted: colors.brown.base,
    disabled: colors.grey.darken1,
    title: colors.grey.darken4,
    subtitle: colors.grey.base,
    link: colors.blue.base,
    buildingline: '#b0e0e6',
    disabledline: '#d6d6d6',
    offlineline: '#d6d6d6',
    monitoredline: '#dff0d8',
  },
  dark: {
    primary: colors.blue.darken4,
    secondary: colors.blue.lighten2,
    accent: colors.blue.accent3,
    success: colors.green.darken4,
    error: colors.red.darken4,
    warning: colors.orange.darken4,
    info: colors.blue.darken4,
    notbuilt: colors.blue.darken4,
    aborted: colors.brown.darken1,
    disabled: colors.grey.darken1,
    title: colors.grey.lighten1,
    subtitle: colors.grey.darken1,
    link: colors.blue.base,
    buildingline: '#2d4e52',
    disabledline: '#4a4a4a',
    offlineline: '#404040',
    monitoredline: '#174802',
  }
}
