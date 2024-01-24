import { MenuItem } from "src/app/Model/menu-model/menu-model";


export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Profile',
          route: '/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard',
          children: [
            { label: 'Jobs', route: '/' },
            { label: 'Companies', route: '/' },
          ],
        },
      ],
    },


    {
      group: 'Settings',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Profile Settings',
          route: '',
          children: [
            { label: 'Informations personnelles', route: '/UserSettings' },
            { label: 'Informations et autorisations', route: '/auth-settings' },
            { label: 'Paiements', route: '/payments-settings' },
            { label: 'Proflix Verified', route: '/proflix-verified-settings' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth Settings',
          route: '',
          children: [
            { label: 'Forgot Password', route: '/UserForgotPassword' },
            { label: 'New Password', route: '/UserForgotPassword' },
            { label: 'Two Steps', route: '/UserForgotPassword' },
          ],
        },
      ],
    },





    {
      group: 'Notifications',
      separator: false,
      items: [
       
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/UserNotifications',
        },
      ],
    },
  ];
}
