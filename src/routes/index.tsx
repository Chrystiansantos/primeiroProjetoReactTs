import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* +indica que ira pegar tudo oq vem depois de repository
      ex: rocketseat/unform
    */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
