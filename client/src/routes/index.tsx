import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
