import routes from '../../utils/routes';
//third party components
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import PageNotFound from '../pages/PageNotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={routes.home.path} component={Home} />
          <Route exact path={routes.pageNotFound.path} component={PageNotFound} />

          {/* Redirect to the home page if no match is found */}
          <Redirect to={routes.pageNotFound.path} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
