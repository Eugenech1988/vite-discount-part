import React from 'react';
import ContentComponent from '@/components/ContentComponent';

type TRoutes = {
  link: string,
  name: string,
  component: React.FC
}

export const routes:TRoutes[] = [
  {link: '/casino_games', name: 'Casino Games', component: () => <ContentComponent/>},
  {link: '/live_games', name: 'Live Games', component: () => <ContentComponent/>},
  {link: '/tv_bet', name: 'TV-Bet', component: () => <ContentComponent/>},
  {link: '/sport_games', name :'Sport Games', component: () => <ContentComponent/>},
  {link: '/virtual', name: 'Virtual', component: () => <ContentComponent/>},
  {link: '/tournaments',name: 'Tournaments', component: () => <ContentComponent/>},
  {link: '/spin_shop', name: 'Spin Shop', component: () => <ContentComponent/>},
  {link: '/faq', name: 'FAQ', component: () => <ContentComponent/>},
  {link: '/support_chat', name: 'Support Chat', component: () => <ContentComponent/>}
]