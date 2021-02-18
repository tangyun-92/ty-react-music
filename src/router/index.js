import TYDiscover from '@/pages/discover'
import TYFriend from '@/pages/friend'
import TYMine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    component: TYDiscover,
  },
  {
    path: '/mine',
    component: TYMine,
  },
  {
    path: '/friend',
    component: TYFriend,
  },
]

export default routes
