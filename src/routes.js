import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Register/Login";
import Forget from "./components/Register/Forget";
import User from "./components/User/User";
import UserNewCase from "./components/User/NewCase";
import UserListCase from "./components/User/ListCase";
import UserProfile from "./components/User/Profile";
import UserSeeCase from "./components/User/SeeCase";

import Admin from "./components/Admin/Admin";
import AdminNewCase from "./components/Admin/ActCase";
import AdminListCase from "./components/Admin/ListCase";
import AdminProfile from "./components/Admin/Profile";
import AdminSeeCase from "./components/Admin/SeeCase";


export const routes = [
  { path: '', component: Home},
  { path: '/register', component: Register},
  { path: '/login', component: Login},
  { path: '/forget', component: Forget},
  { path: '/user', component: User, children:[
      { path: '', component: UserProfile},
      { path: 'new', component: UserNewCase},
      { path: 'list/:page', component: UserListCase},
      { path: 'case/:id', component: UserSeeCase},
    ]},
  { path: '/admin', component: Admin, children:[
      { path: '', component: AdminProfile},
      { path: 'newcase', component: AdminNewCase},
      { path: 'list/:page', component: AdminListCase},
      { path: 'case/:id', component: AdminSeeCase},
      // { path: 'refer/:id', component: Refer}
    ]},
  { path: '*', redirect: '/'}
];
