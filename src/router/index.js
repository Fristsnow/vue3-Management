import {createRouter, createWebHistory, useRouter} from 'vue-router'
import Layout from '@/views/Layout.vue'
import {userRouter} from './user/index.js'
import {typeDrugsRouter} from "@/router/typeDrugs/index.js";
import {drugInstructionsRouter} from "@/router/drugInstructions/index.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '',
            component: Layout,
            redirect: '/user',
            children: [
                ...userRouter,
                ...typeDrugsRouter,
                ...drugInstructionsRouter,
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        }
    ]
})

export default router
