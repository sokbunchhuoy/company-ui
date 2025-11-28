import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'pi pi-home',
                items: [
                    { label: 'SaaS', icon: 'pi pi-desktop', routerLink: ['/page'] },
                    { label: 'Sales', icon: 'pi pi-chart-bar', routerLink: ['/page/dashboard-sales'] }
                ]
            },
            {
                label: 'Company', icon: 'pi pi-home',
                items: [
                    { label: 'Employee', icon: 'pi pi-desktop', routerLink: ['/page/company/employee'] },
                ]
            },
            {
                label: 'Main Calculator', icon: 'pi pi-home',
                items: [
                    { label: 'Calculator', icon: 'pi pi-desktop', routerLink: ['/page/post-calculator/p-calculator'] },
                ]
            },
            {
                label: 'UI Kit', icon: 'pi pi-star', routerLink: ['/uikit'],
                items: [
                    { label: 'Form Layout', icon: 'pi pi-id-card', routerLink: ['/page/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-check-square', routerLink: ['/page/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-bookmark', routerLink: ['/page/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-exclamation-circle', routerLink: ['/page/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-box', routerLink: ['/page/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-table', routerLink: ['/page/uikit/table'] },
                    { label: 'List', icon: 'pi pi-list', routerLink: ['/page/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-share-alt', routerLink: ['/page/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-tablet', routerLink: ['/page/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-clone', routerLink: ['/page/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-image', routerLink: ['/page/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-bars', routerLink: ['/page/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }},
                    { label: 'Message', icon: 'pi pi-comment', routerLink: ['/page/uikit/message'] },
                    { label: 'File', icon: 'pi pi-file', routerLink: ['/page/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-chart-bar', routerLink: ['/page/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-circle-off', routerLink: ['/page/uikit/misc'] }
                ]
            },
            {
                label: 'Apps',
                icon: 'pi pi-th-large',
                items: [
                    {
                        label: 'Blog',
                        icon: 'pi pi-fw pi-comment',
                        items: [
                            {
                                label: 'List',
                                icon: 'pi pi-fw pi-image',
                                routerLink: ['/page/apps/blog/list']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-list',
                                routerLink: ['/page/apps/blog/detail']
                            },
                            {
                                label: 'Edit',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/page/apps/blog/edit']
                            }
                        ]
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/page/apps/calendar']
                    },
                    {
                        label: 'Chat',
                        icon: 'pi pi-fw pi-comments',
                        routerLink: ['/page/apps/chat']
                    },
                    {
                        label: 'Files',
                        icon: 'pi pi-fw pi-folder',
                        routerLink: ['/page/apps/files']
                    },
                    {
                        label: 'Kanban',
                        icon: 'pi pi-fw pi-sliders-v',
                        routerLink: ['/page/apps/kanban']
                    },
                    {
                        label: 'Mail',
                        icon: 'pi pi-fw pi-envelope',
                        items: [
                            {
                                label: 'Inbox',
                                icon: 'pi pi-fw pi-inbox',
                                routerLink: ['/page/apps/mail/inbox']
                            },
                            {
                                label: 'Compose',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/page/apps/mail/compose']
                            },
                            {
                                label: 'Detail',
                                icon: 'pi pi-fw pi-comment',
                                routerLink: ['/page/apps/mail/detail/1000']
                            }
                        ]
                    },
                    {
                        label: 'Task List',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['/page/apps/tasklist']
                    }
                ]
            },
            {
                label: 'Prime Blocks', icon: 'pi pi-fw pi-prime', routerLink: ['/blocks'],
                items: [
                    { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/page/blocks'] },
                    { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-ng', target: '_blank' },
                ]
            },
            {
                label: 'Utilities', icon: 'pi pi-fw pi-compass', routerLink: ['/utilities'],
                items: [
                    { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['utilities/icons'] },
                    { label: 'Colors', icon: 'pi pi-fw pi-palette', routerLink: ['utilities/colors'] },
                    { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: 'https://www.primefaces.org/primeflex/', target: '_blank' },
                    { label: 'Figma', icon: 'pi pi-fw pi-pencil', url: 'https://www.figma.com/file/PgQXX4HXMPeCkT74tGajod/Preview-%7C-Verona-2022?node-id=1303%3A750', target: '_blank' }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing'],
                        data: {'fullPage': true}
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-user-plus',
                                routerLink: ['/auth/register'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Forgot Password',
                                icon: 'pi pi-fw pi-question',
                                routerLink: ['/auth/forgotpassword'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'New Password',
                                icon: 'pi pi-fw pi-cog',
                                routerLink: ['/auth/newpassword'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Verification',
                                icon: 'pi pi-fw pi-envelope',
                                routerLink: ['/auth/verification'],
                                data: {'fullPage': true}
                            },
                            {
                                label: 'Lock Screen',
                                icon: 'pi pi-fw pi-eye-slash',
                                routerLink: ['/auth/lockscreen'],
                                data: {'fullPage': true}
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/page/pages/crud']
                    },
                    {
                        label: 'Timeline',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/page/pages/timeline']
                    },
                    {
                        label: 'Invoice',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/page/pages/invoice']
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['/page/pages/aboutus']
                    },
                    {
                        label: 'Help',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/page/pages/help']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/page/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/page/pages/empty']
                    },
                    {
                        label: 'FAQ',
                        icon: 'pi pi-fw pi-question',
                        routerLink: ['/page/pages/faq']
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-phone',
                        routerLink: ['/page/pages/contact']
                    }
                ]
            },
            {
                label: 'E-Commerce',
                icon: 'pi pi-fw pi-wallet',
                items: [
                    {
                        label: 'Product Overview',
                        icon: 'pi pi-fw pi-image',
                        routerLink: ['ecommerce/product-overview']
                    },
                    {
                        label: 'Product List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['ecommerce/product-list']
                    },
                    {
                        label: 'New Product',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['ecommerce/new-product']
                    },
                    {
                        label: 'Shopping Cart',
                        icon: 'pi pi-fw pi-shopping-cart',
                        routerLink: ['ecommerce/shopping-cart']
                    },
                    {
                        label: 'Checkout Form',
                        icon: 'pi pi-fw pi-check-square',
                        routerLink: ['ecommerce/checkout-form']
                    },
                    {
                        label: 'Order History',
                        icon: 'pi pi-fw pi-history',
                        routerLink: ['ecommerce/order-history']
                    },
                    {
                        label: 'Order Summary',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['ecommerce/order-summary']
                    }
                ]
            },
            {
                label: 'User Management',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'List',
                        icon: 'pi pi-fw pi-list',
                        routerLink: ['profile/list']
                    },
                    {
                        label: 'Create',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: ['profile/create']
                    }
                ]
            },
            {
                label: 'Hierarchy', icon: 'pi pi-align-left',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-align-left',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-align-left',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-align-left',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-align-left' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-align-left',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-align-left',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-align-left',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-align-left' },
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                label: 'Start', icon: 'pi pi-download',
                items: [
                    {
                        label: 'Buy Now', icon: 'pi pi-shopping-cart', url: 'https://www.primefaces.org/store'
                    },
                    {
                        label: 'Documentation', icon: 'pi pi-info-circle', routerLink: ['/documentation']
                    }
                ]
            }
        ];
    }
}
