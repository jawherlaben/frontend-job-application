import { MenuItem } from "src/app/Model/menu-model";

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Base',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Profile',
          route: '/user-component/profile',
        },
        {
          icon: 'assets/icons/heroicons/outline/eye.svg',
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
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Profile Settings',
          route: '/user-component/user-settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/information-circle.svg',
          label: 'Auth Settings',
          route:'/user-component/auth-settings',
        },
        // {
        //   icon: 'assets/icons/heroicons/outline/chart-pie.svg',
        //   label: 'Paiements', 
        //   route: '/user-component/payments-settings' 
        // },
        // {
        //   icon: 'assets/icons/heroicons/outline/chart-pie.svg',
        //   label: 'Proflix Verified', 
        //   route: '/user-component/proflix-verified-settings' 
        // },
      ],
    },
    // {
    //   group: 'Notifications',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/heroicons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/user-component/user-notifications',
    //     },
    //   ],
    // },
  ];
}
