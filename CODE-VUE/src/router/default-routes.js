export const DefaultRoutes = (prefix) => [
  {
    path: "/",
    name: prefix + ".home",
    meta: { auth: true, name: "Home" },
    component: () => import("@/views/IndexPage.vue"),
  },
  {
    path: "/dashboard-1",
    name: prefix + ".dashboard-1",
    meta: { auth: true, name: "dashboard-1" },
    component: () => import("@/views/dashboard-pages/dashboard-1.vue"),
  },
  {
    path: "/dashboard-2",
    name: prefix + ".product",
    meta: { auth: true, name: "Product" },
    component: () => import("@/views/dashboard-pages/dashboard-2.vue"),
  },
  {
    path: "/dashboard-4",
    name: prefix + ".dashboard-4",
    meta: { auth: true, name: "dashboard-4" },
    component: () => import("@/views/dashboard-pages/dashboard-4.vue"),
  },

  // email route
  {
    path: "/email/inbox",
    name: prefix + ".inbox",
    meta: { auth: true, name: "inbox" },
    component: () => import("@/views/pages/email/inbox.vue"),
  },
  {
    path: "/email/email-compose",
    name: prefix + ".email-compose",
    meta: { auth: true, name: "email-compose" },
    component: () => import("@/views/pages/email/email-compose.vue"),
  },

  // doctor route
  {
    path: "/doctor/doctor-list",
    name: prefix + ".doctor-list",
    meta: { auth: true, name: "doctor-list" },
    component: () => import("@/views/pages/doctor/all-doctor.vue"),
  },
  {
    path: "/doctor/add-doctor",
    name: prefix + ".add-doctor",
    meta: { auth: true, name: "add-doctor" },
    component: () => import("@/views/pages/doctor/add-doctor.vue"),
  },
  {
    path: "/doctor/doctor-profile",
    name: prefix + ".doctor-profile",
    meta: { auth: true, name: "doctor-profile" },
    component: () => import("@/views/pages/doctor/doctor-profile.vue"),
  },
  {
    path: "/doctor/edit-doctor",
    name: prefix + ".edit-doctor",
    meta: { auth: true, name: "edit-doctor" },
    component: () => import("@/views/pages/doctor/edit-doctor.vue"),
  },

  // chat route
  {
    path: "/chat",
    name: prefix + ".chat",
    meta: { auth: true, name: "chat" },
    component: () => import("@/views/pages/chat/chat.vue"),
  },

  // ui-elements route
  {
    path: "/ui-elements/colors",
    name: prefix + ".colors",
    meta: { auth: true, name: "Colors" },
    component: () => import("@/views/components/ui-elements/ColorsView.vue"),
  },
  {
    path: "/ui-elements/typography",
    name: prefix + ".typography",
    meta: { auth: true, name: "Typography" },
    component: () => import("@/views/components/ui-elements/TypographyView.vue"),
  },
  {
    path: "/ui-elements/alerts",
    name: prefix + ".alerts",
    meta: { auth: true, name: "Alerts" },
    component: () => import("@/views/components/ui-elements/AlertsView.vue"),
  },
  {
    path: "/ui-elements/badges",
    name: prefix + ".badges",
    meta: { auth: true, name: "Badges" },
    component: () => import("@/views/components/ui-elements/BadgeView.vue"),
  },
  {
    path: "/ui-elements/breadcrumb",
    name: prefix + ".breadcrumb",
    meta: { auth: true, name: "Breadcrumb" },
    component: () => import("@/views/components/ui-elements/BreadCrumb.vue"),
  },
  {
    path: "/ui-elements/buttons",
    name: prefix + ".buttons",
    meta: { auth: true, name: "Buttons" },
    component: () => import("@/views/components/ui-elements/ButtonsView.vue"),
  },
  {
    path: "/ui-elements/cards",
    name: prefix + ".cards",
    meta: { auth: true, name: "Cards" },
    component: () => import("@/views/components/ui-elements/CardsView.vue"),
  },
  {
    path: "/ui-elements/carousel",
    name: prefix + ".carousel",
    meta: { auth: true, name: "Carousel" },
    component: () => import("@/views/components/ui-elements/CarouselView.vue"),
  },
  {
    path: "/ui-elements/video",
    name: prefix + ".video",
    meta: { auth: true, name: "Video" },
    component: () => import("@/views/components/ui-elements/VideoView.vue"),
  },
  {
    path: "/ui-elements/grid",
    name: prefix + ".grid",
    meta: { auth: true, name: "Grid" },
    component: () => import("@/views/components/ui-elements/GridView.vue"),
  },
  {
    path: "/ui-elements/images",
    name: prefix + ".images",
    meta: { auth: true, name: "Images" },
    component: () => import("@/views/components/ui-elements/ImagesView.vue"),
  },
  {
    path: "/ui-elements/list-group",
    name: prefix + ".list-group",
    meta: { auth: true, name: "List group" },
    component: () => import("@/views/components/ui-elements/ListGroup.vue"),
  },
  {
    path: "/ui-elements/modal",
    name: prefix + ".modal",
    meta: { auth: true, name: "Modal" },
    component: () => import("@/views/components/ui-elements/ModalView.vue"),
  },
  {
    path: "/ui-elements/notifications",
    name: prefix + ".notifications",
    meta: { auth: true, name: "Notifications" },
    component: () => import("@/views/components/ui-elements/NotificationsView.vue"),
  },
  {
    path: "/ui-elements/pagination",
    name: prefix + ".pagination",
    meta: { auth: true, name: "Pagination" },
    component: () => import("@/views/components/ui-elements/PaginationView.vue"),
  },
  {
    path: "/ui-elements/popovers",
    name: prefix + ".popovers",
    meta: { auth: true, name: "popovers" },
    component: () => import("@/views/components/ui-elements/PopoversView.vue"),
  },
  {
    path: "/ui-elements/progressbar",
    name: prefix + ".progressbar",
    meta: { auth: true, name: "Progressbar" },
    component: () => import("@/views/components/ui-elements/ProgressBars.vue"),
  },
  {
    path: "/ui-elements/tabs",
    name: prefix + ".tabs",
    meta: { auth: true, name: "Tabs" },
    component: () => import("@/views/components/ui-elements/TabsView.vue"),
  },
  {
    path: "/ui-elements/tooltips",
    name: prefix + ".tooltips",
    meta: { auth: true, name: "Tooltips" },
    component: () => import("@/views/components/ui-elements/TooltipsView.vue"),
  },

  // forms route
  {
    path: "/forms/form-elements",
    name: prefix + ".form-elements",
    meta: { auth: true, name: "Form Elements" },
    component: () =>
      import("@/views/components/forms/FormElement.vue"),
  },
  {
    path: "/forms/form-validation",
    name: prefix + ".form-validation",
    meta: { auth: true, name: "Form Validation" },
    component: () =>
      import("@/views/components/forms/FormValidation.vue"),
  },
  {
    path: "/forms/form-switch",
    name: prefix + ".form-switch",
    meta: { auth: true, name: "Form Switch" },
    component: () =>
      import("@/views/components/forms/FormSwitch.vue"),
  },
  {
    path: "/forms/form-checkbox",
    name: prefix + ".form-checkbox",
    meta: { auth: true, name: "Form Checkbox" },
    component: () =>
      import("@/views/components/forms/FormCheckbox.vue"),
  },
  {
    path: "/forms/form-radio",
    name: prefix + ".form-radio",
    meta: { auth: true, name: "Form Radio" },
    component: () =>
      import("@/views/components/forms/FormRadio.vue"),
  },

  // form wizard route
  {
    path: "/form-wizard/simple-wizard",
    name: prefix + ".simple-wizard",
    meta: { auth: true, name: "Simple Wizard" },
    component: () =>
      import("@/views/components/form-wizard/SimpalWizard.vue"),
  },
  {
    path: "/form-wizard/validate-wizard",
    name: prefix + ".validate-wizard",
    meta: { auth: true, name: "Validate Wizard" },
    component: () =>
      import("@/views/components/form-wizard/ValidateWizard.vue"),
  },
  {
    path: "/form-wizard/vertical-wizard",
    name: prefix + ".vertical-wizard",
    meta: { auth: true, name: "Vertical Wizard" },
    component: () =>
      import("@/views/components/form-wizard/VerticalWizard.vue"),
  },

  // tables route
  {
    path: "/table/basic-table",
    name: prefix + ".basic-table",
    meta: { auth: true, name: "Basic Table" },
    component: () => import("@/views/components/tables/basic-table.vue"),
  },
  {
    path: "/table/data-table",
    name: prefix + ".data-table",
    meta: { auth: true, name: "Data Table" },
    component: () => import("@/views/components/tables/data-table.vue"),
  },
  {
    path: "/table/editable-table",
    name: prefix + ".editable-table",
    meta: { auth: true, name: "Editable Table" },
    component: () => import("@/views/components/tables/editable-table.vue"),
  },

  // charts route
  {
    path: "/charts/chart-page",
    name: prefix + ".chart-page",
    meta: { auth: true, name: "Chart Page" },
    component: () => import("@/views/pages/charts/chart-page.vue"),
  },
  {
    path: "/charts/e-chart",
    name: prefix + ".e-chart",
    meta: { auth: true, name: "Chart Page" },
    component: () => import("@/views/pages/charts/e-chart.vue"),
  },
  {
    path: "/charts/am-chart",
    name: prefix + ".am-chart",
    meta: { auth: true, name: "AM Chart" },
    component: () => import("@/views/pages/charts/am-chart-page.vue"),
  },
  {
    path: "/charts/apexchart",
    name: prefix + ".apexchart",
    meta: { auth: true, name: "ApexChart" },
    component: () => import("@/views/pages/charts/apexchart.vue"),
  },

  // icons route
  {
    path: "/icons/dripicons",
    name: prefix + ".dripicons",
    meta: { auth: true, name: "dripicons" },
    component: () => import("@/views/components/icons/Dripicons.vue"),
  },
  {
    path: "/icons/fontawesome-5",
    name: prefix + ".fontawesome-5",
    meta: { auth: true, name: "fontawesome-5" },
    component: () => import("@/views/components/icons/IconFontawesome5.vue"),
  },
  {
    path: "/icons/line-awesome",
    name: prefix + "./icons/line-awesome",
    meta: { auth: true, name: "/icons/line-awesome" },
    component: () => import("@/views/components/icons/LineAwesome.vue"),
  },
  {
    path: "/icons/remixicon",
    name: prefix + ".remixicon",
    meta: { auth: true, name: "remixicon" },
    component: () => import("@/views/components/icons/Remixicon.vue"),
  },
  {
    path: "/icons/unicons",
    name: prefix + ".unicons",
    meta: { auth: true, name: "unicons" },
    component: () => import("@/views/components/icons/Unicons.vue"),
  },

  // maps route
  {
    path: "/maps/google-map",
    name: prefix + ".google-map",
    meta: { auth: true, name: "google-map" },
    component: () => import("@/views/pages/maps/GooglePage.vue"),
  },
  {
    path: "/maps/vector-map",
    name: prefix + ".vector-map",
    meta: { auth: true, name: "vector-map" },
    component: () => import("@/views/pages/maps/VectorPage.vue"),
  },

  // extra-pages route
  {
    path: "/extra-pages/timeline",
    name: prefix + ".timeline",
    meta: { auth: true, name: "Timeline" },
    component: () => import("@/views/pages/extra-pages/timeline.vue"),
  },
  {
    path: "/extra-pages/invoice",
    name: prefix + ".invoice",
    meta: { auth: true, name: "invoice" },
    component: () => import("@/views/pages/extra-pages/invoice.vue"),
  },
  {
    path: "/extra-pages/blank-page",
    name: prefix + ".blank-page",
    meta: { auth: true, name: "Blank Page" },
    component: () => import("@/views/pages/extra-pages/blank-page.vue"),
  },
  {
    path: "/extra-pages/pricing",
    name: prefix + ".pricing",
    meta: { auth: true, name: "Pricing" },
    component: () => import("@/views/pages/extra-pages/pricing.vue"),
  },
  {
    path: "/extra-pages/pages-pricing-one",
    name: prefix + ".pricing-one",
    meta: { auth: true, name: "Pricing-one" },
    component: () => import("@/views/pages/extra-pages/pricing-1.vue"),
  },
  {
    path: "/extra-pages/faq",
    name: prefix + ".faq",
    meta: { auth: true, name: "Faq" },
    component: () => import("@/views/pages/extra-pages/faq.vue"),
  },
  {
    path: "/extra-pages/privacy-policy",
    name: prefix + ".privacy-policy",
    meta: { auth: true, name: "privacy-policy" },
    component: () => import("@/views/pages/extra-pages/privacy-policy.vue"),
  },
  {
    path: "/extra-pages/terms-of-service",
    name: prefix + ".terms-of-service",
    meta: { auth: true, name: "terms-of-service" },
    component: () => import("@/views/pages/extra-pages/terms-and-service.vue"),
  },
  {
    path: "/extra-pages/privacy-setting",
    name: prefix + ".privacy-setting",
    meta: { auth: true, name: "privacy-setting" },
    component: () => import("@/views/pages/extra-pages/privacy-setting.vue"),
  },
  {
    path: "/extra-pages/account-setting",
    name: prefix + ".account-setting",
    meta: { auth: true, name: "account-setting" },
    component: () => import("@/views/pages/extra-pages/account-setting.vue"),
  },
];

// auth routes
export const AuthRoutes = (prefix) => [
  {
    path: "/auth/sign-in",
    name: prefix + ".sign-in",
    meta: { auth: true, name: "sign-in" },
    component: () => import("@/views/pages/auth/SignIn.vue"),
  },
  {
    path: "/auth/sign-up",
    name: prefix + ".sign-up",
    meta: { auth: true, name: "sign-up" },
    component: () => import("@/views/pages/auth/SignUp.vue"),
  },
  {
    path: "/auth/recover-password",
    name: prefix + ".recover-password",
    meta: { auth: true, name: "recover-password" },
    component: () => import("@/views/pages/auth/RecoverPw.vue"),
  },
  {
    path: "/auth/confirm-mail",
    name: prefix + ".confirm-mail",
    meta: { auth: true, name: "confirm-mail" },
    component: () => import("@/views/pages/auth/ConfirmMail.vue"),
  },
  {
    path: "/auth/lock-screen",
    name: prefix + ".lock-screen",
    meta: { auth: true, name: "Lock-screen" },
    component: () => import("@/views/pages/auth/LockScreen.vue"),
  },
];

export const ErrorRoutes = (prefix) => [
  {
    path: "/error/error-404",
    name: prefix + ".error-404",
    meta: { auth: true, name: "Error 404" },
    component: () => import("@/views/pages/extra-pages/error-404.vue"),
  },
  {
    path: "/error/error-500",
    name: prefix + ".error-500",
    meta: { auth: true, name: "Error 500" },
    component: () => import("@/views/pages/extra-pages/error-500.vue"),
  },
  {
    path: "/extra-pages/coming-soon",
    name: prefix + ".coming-soon",
    meta: { auth: true, name: "Comingsoon" },
    component: () => import("@/views/pages/extra-pages/coming-soon.vue"),
  },
  {
    path: "/extra-pages/maintenace",
    name: prefix + ".maintenance",
    meta: { auth: true, name: "Maintenance" },
    component: () => import("@/views/pages/extra-pages/maintenance.vue"),
  },
];
