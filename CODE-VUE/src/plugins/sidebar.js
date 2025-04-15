export const sidebarItems = [
  {
    title: 'Pages',
    isTitle: true
  },
  {
    title: 'Authentication',
    icon: 'ri-server-fill',
    link: '#',
    class: 'is-sub',
    children: [
      {
        title: 'Sign In',
        link: '/auth/sign-in',
        icon: 'ri-login-box-fill'
      },
      {
        title: 'Sign Up',
        link: '/auth/sign-up',
        icon: 'ri-logout-box-fill'
      },
      {
        title: 'Recover Password',
        link: '/auth/recover-password',
        icon: 'ri-record-mail-fill'
      },
      {
        title: 'Lock Screen',
        link: '/auth/lock-screen',
        icon: 'ri-file-lock-fill'
      }
    ]
  }
]
