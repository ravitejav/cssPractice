import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Apps } from "../Cosntants/Apps";
import { notFound } from "../NotFound";

export const FirstApp = () => {

  return (
    <section className="container">
      <div className="app">
        <Switch>
          {Apps.map((route, i) =>
            route.path
              ? <Route path={route.path} component={route.component} key={i} />
              : <Route component={notFound} />
          )}
        </Switch>
      </div>
    </section>
  );
};