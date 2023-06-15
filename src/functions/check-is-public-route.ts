import { APP_ROUTES } from "@/constants/app-routes";

const checkIsPublicRoute = (asPath: string) => {
  const appPublichRoutes = Object.values(APP_ROUTES.public);

  return appPublichRoutes.includes(asPath);
}

export default checkIsPublicRoute;
