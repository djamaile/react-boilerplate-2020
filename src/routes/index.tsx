import React, { ReactElement, Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../assets/theme";
import history from "../utils/history";

const Home = lazy(() => import("../views/home/App"));

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default IndexRouter;
