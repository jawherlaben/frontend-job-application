import { MenuItem } from "src/app/Model/menu-model/menu-model";


export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Jobs', route: '/' },
            { label: 'Companies', route: '/' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth',
          route: '/auth/user',
          children: [
            { label: 'Forgot Password', route: '/UserForgotPassword' },
            { label: 'New Password', route: '/UserForgotPassword' },
            { label: 'Two Steps', route: '/UserForgotPassword' },
          ],
        },
      ],
    },
    {
      group: 'Config',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Settings',
          route: '/UserSettings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/UserNotifications',
        },
      ],
    },
  ];
}
