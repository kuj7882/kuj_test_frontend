import { createWebHistory, createRouter } from 'vue-router'

import BoardList from '../board/BoardList.vue'

import BoardForm from '../board/BoardForm.vue'
import BoardComment from '../board/BoardComment.vue'

const routes = [
  { path: '/board/list', component: BoardList },
  { path: '/board/form', component: BoardForm },
  { path: '/board/comment', component: BoardComment },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;