import index from './pages/index/index.vue';
import agreement_1_vip_service from './pages/agreement_1_vip_service/vip_serveic.vue'
import agreement_2_cc0_image from './pages/agreement_2_cc0_image/cc0_image.vue'
import agreement_3_cc01_0_text from './pages/agreement_3_cc01.0_text/cc01.0_text.vue'
import agreement_4_img_empower from './pages/agreement_4_img_empower/img_empower.vue'
import agreement_5_problem from './pages/agreement_5_problem/problem.vue'
export default [
  {
    path: '/',
    component: index
  }, {
    path: '/vip_service_url',
    component: agreement_1_vip_service
  }, {
    path: '/cc0_image_url',
    component: agreement_2_cc0_image
  }, {
    path: '/cc01_0_text_url',
    component: agreement_3_cc01_0_text
  }, {
    path: '/img_empower_url',
    component: agreement_4_img_empower
  }, {
    path: '/problem_url',
    component: agreement_5_problem
  },
]
