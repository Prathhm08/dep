import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Topic 1',
    path: '/',
    // icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Topic 3',
    path: '/projects',
    // icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: '3.1 Topic 1', path: '/projects' },
      { title: '3.2 Topic 2', path: '/projects/web-design' },
      { title: '3.3 Topic 3', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Topic 4',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Topic 5',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: '5.1 Topic 1', path: '/settings/account' },
      { title: '5.2 Topic 2', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Topic 6',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];
