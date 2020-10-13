import React from 'react';

const Login = React.lazy(() => import('./component/auth/Auth'));
const Home = React.lazy(() => import('./component/Home'));
const NewSong = React.lazy(() => import('./component/songs/New'));
const EditSong = React.lazy(() => import('./component/songs/Edit'));

const routes = [
    { path: '/', exact: true, name: 'SignIn', component: Login },
    { path: '/home', exact: true, name: 'Home', component: Home },
    { path: '/songs/new', exact: true, name: 'New', component: NewSong },
    { path: '/songs/:id/edit', exact: true, name: 'New', component: EditSong }
]

export default routes;
