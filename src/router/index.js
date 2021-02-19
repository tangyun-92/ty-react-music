import { Redirect } from 'react-router-dom'

import TYDiscover from '@/pages/discover'
import TYRecommend from '@/pages/discover/c-pages/recommend'
import TYTopList from '@/pages/discover/c-pages/top-list'
import TYPlayList from '@/pages/discover/c-pages/play-list'
import TYDjRadio from '@/pages/discover/c-pages/dj-radio'
import TYArtist from '@/pages/discover/c-pages/artist'
import TYAlbum from '@/pages/discover/c-pages/album'
import TYFriend from '@/pages/friend'
import TYMine from '@/pages/mine'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    path: '/discover',
    component: TYDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to="/discover/recommend" />,
      },
      {
        path: '/discover/recommend',
        component: TYRecommend,
      },
      {
        path: '/discover/top-list',
        component: TYTopList,
      },
      {
        path: '/discover/play-list',
        component: TYPlayList,
      },
      {
        path: '/discover/dj-radio',
        component: TYDjRadio,
      },
      {
        path: '/discover/artist',
        component: TYArtist,
      },
      {
        path: '/discover/album',
        component: TYAlbum,
      },
    ],
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
