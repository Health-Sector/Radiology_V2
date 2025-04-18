// Initial Setting State
export const initialState = {
  saveLocal: 'sessionStorage',
  storeKey: 'xraysetting-vue',
  setting: {
    app_name: {
      value: 'XRay'
    },
    theme_scheme_direction: {
      value: 'ltr'
    },
    theme_scheme: {
      value: 'light'
    },
    theme_color: {
      colors: {},
      value: 'default'
    },
    theme_font_size: {
      value: 'theme-fs-sm'
    },
    page_layout: {
      value: 'container-fluid'
    },
    sidebar_color: {
      value: 'sidebar-color'
    },
    sidebar_type: {
      value: ['sidebar-mini', 'sidebar-hover']
    },
    sidebar_menu_style: {
      value: 'sidebar-default navs-rounded-all'
    },
  }
}

// Default Setting State
export const defaultState = {
  saveLocal: 'sessionStorage',
  storeKey: 'xraysetting-vue',
  setting: {
    app_name: {
      target: '[data-setting="app_name"]',
      type: 'text',
      value: 'XRay'
    },
    theme_scheme_direction: {
      target: 'html',
      choices: ['ltr', 'rtl'],
      type: 'layout_design',
      value: 'ltr'
    },
    theme_scheme: {
      target: 'html',
      choices: ['light', 'dark', 'auto'],
      type: 'layout_design',
      value: 'dark'
    },
    theme_color: {
      target: 'html',
      choices: ['default', 'color-1', 'color-2', 'color-3'],
      type: 'variable',
      colors: {},
      value: 'default'
    },
    theme_font_size: {
      target: 'html',
      choices: ['theme-fs-sm', 'theme-fs-md', 'theme-fs-lg'],
      type: 'layout_design',
      value: 'theme-fs-sm'
    },
    page_layout: {
      target: '#page_layout',
      choices: ['container', 'container-fluid'],
      type: 'layout_design',
      value: 'container'
    },
    sidebar_color: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-color', 'sidebar-dark', 'sidebar-white'],
      type: 'layout_design',
      value: 'sidebar-color'
    },
    sidebar_type: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-hover', 'sidebar-mini', 'sidebar-soft'],
      type: 'layout_design',
      value: ['sidebar-mini', 'sidebar-hover']
    },
    sidebar_menu_style: {
      target: '[data-toggle="main-sidebar"]',
      choices: ['sidebar-default navs-rounded', 'sidebar-default navs-rounded-all', 'sidebar-default navs-pill', 'sidebar-default navs-pill-all'],
      type: 'layout_design',
      value: 'sidebar-default navs-rounded-all'
    },
  }
}
