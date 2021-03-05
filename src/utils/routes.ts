interface routesShape {
  [name: string]: { path: string };
}

const routes: routesShape = {
  home: { path: '/' },
  pageNotFound: { path: '/404' },
};

export default routes;
