export const userRouter = [
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/Index.vue'),
    },
    {
        path: '/user/info',
        component: () => import('@/views/user/UserInfo.vue'),
    },
    {
        path: '/user/password',
        component: () => import('@/views/user/UserResetPassword.vue'),
    },
]
