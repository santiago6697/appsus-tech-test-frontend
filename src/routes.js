import React from 'react';

const Login = React.lazy(() => import('./component/auth/Auth'));
const Home = React.lazy(() => import('./component/Home'));

const routes = [
    { path: '/', exact: true, name: 'SignIn', component: Login },
    { path: '/home', exact: true, name: 'Home', component: Home }
]

export default routes;
