import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import { SignUp, SignIn, Dashboard, Favorites, Search, UserPage } from "../page";

const ROUTES = {
  MAIN: "/",
  SIGN_UP: "signup",
  SIGN_IN: "signin",
  SEARCH: "search",
  FAVORITES: "favorites",
  USER: "user/:name",
};

const ROUTES_CONFIG = [
  {
    path: ROUTES.SIGN_UP,
    guard: GuestGuard,
    page: SignUp,
  },
  {
    path: ROUTES.SIGN_IN,
    guard: GuestGuard,
    page: SignIn,
  },
  {
    path: ROUTES.MAIN,
    guard: AuthGuard,
    page: Dashboard,
  },
  {
    path: ROUTES.FAVORITES,
    guard: AuthGuard,
    page: Favorites,
  },
  {
    path: ROUTES.SEARCH,
    guard: AuthGuard,
    page: Search,
  },
  {
    path: ROUTES.USER,
    guard: AuthGuard,
    page: UserPage,
  },
];

export default ROUTES;
export { ROUTES_CONFIG };
