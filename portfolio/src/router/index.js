import Profile from '@/pages/profile'
import Skill from '@/pages/skill'
import Production from '@/pages/production'


export default [
    {
      path: '/',
      component: Profile
    },
    {
      path: '/skill',
      component: Skill
    },
    {
      path: '/production',
      component: Production
    },
    { 
      path: '*', 
      component: Profile 
    }
]