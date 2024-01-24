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
          route: '/user-component/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/user-component/user-dashboard',
          
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
          route: '/user-component/user-settings',
          children: [
            { label: 'Informations personnelles', route: '/user-component/user-settings' },
            { label: 'Informations et autorisations', route: '/user-component/auth-settings' },
            { label: 'Paiements', route: '/user-component/payments-settings' },
            { label: 'Proflix Verified', route: '/user-component/proflix-verified-settings' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Auth Settings',
          route: '/user-component/auth-settings',
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
          route: '/user-component/user-notifications',
        },
      ],
    },
  ];
}
