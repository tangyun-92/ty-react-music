import React from 'react'
import { Redirect } from 'react-router-dom'

const TYDiscover = React.lazy(() => import('@/pages/discover'))
const TYRecommend = React.lazy(() =>
  import('@/pages/discover/recommend')
)
const TYTopList = React.lazy(() => import('@/pages/discover/top-list'))
const TYPlayList = React.lazy(() =>
  import('@/pages/discover/play-list')
)
const TYDjRadio = React.lazy(() => import('@/pages/discover/dj-radio'))
const TYArtist = React.lazy(() => import('@/pages/discover/artist'))
const TYAlbum = React.lazy(() => import('@/pages/discover/album'))
const TYPlayer = React.lazy(() => import('@/pages/player'))
const TYFriend = React.lazy(() => import('@/pages/friend'))
const TYMine = React.lazy(() => import('@/pages/mine'))

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
      {
        path: '/discover/player',
        component: TYPlayer,
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
