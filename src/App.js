import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FirstApp } from "./FirstApp";
import { Routes } from "./Cosntants/Routes";
import "./App.css";

const App = () => {
  return (
    <main className="main-body">
      <section className="container">
        <Router>
          <div className="app">
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                {Object.keys(Routes).map((route, i) => {
                  const currentRoute = Routes[route];
                  return (
                    <li key={i}>
                      <Link to={route}>{currentRoute.title}</Link>
                      <div className="dropDown">
                        {currentRoute.childRoutes.map((childRoute) => (
                          <Link to={'/' + route + childRoute.path} key={'/' + route + childRoute.path}>
                            {childRoute.title}
                          </Link>
                        ))}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Switch>
              <Route path="/firstApp">
                <FirstApp />
              </Route>
            </Switch>
          </div>
        </Router>
      </section>
    </main>
  );
};
export default App;
