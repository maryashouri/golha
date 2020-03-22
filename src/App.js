import React, { Component } from "react";
import "./styles/index.scss";
import {
  Page,
  Toolbar,
  BackButton,
  RouterNavigator,
  RouterUtil
} from "react-onsenui";

import MainPage from "./pages/Home/index";

class App extends Component {
  constructor(props) {
    super(props);
    const routeConfig = RouterUtil.init([
      {
        component: MainPage,
        props: {
          key: "main",
          pushPage: (...args) => this.pushPage(...args)
        }
      }
    ]);

    this.state = { routeConfig };
  }

  pushPage(page, data) {
    const route = {
      component: page,

      props: {
        data,
        popPage: () => this.popPage(),
        pushPage: (...args) => this.pushPage(...args)
      }
    };

    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.push({
      routeConfig,
      route
    });

    this.setState({ routeConfig });
  }

  popPage(options = {}) {
    let routeConfig = this.state.routeConfig;

    routeConfig = RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: { duration: 0.4 }
      }
    });

    this.setState({ routeConfig });
  }

  onPostPush() {
    const routeConfig = RouterUtil.postPush(this.state.routeConfig);
    this.setState({ routeConfig });
  }

  onPostPop() {
    const routeConfig = RouterUtil.postPop(this.state.routeConfig);
    this.setState({ routeConfig });
  }

  renderPage(route) {
    const props = route.props || {};
    return <route.component {...props} />;
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="left">
          <BackButton />
        </div>
        <div className="center"> Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <RouterNavigator
          swipeable={true}
          swipePop={options => this.popPage(options)}
          routeConfig={this.state.routeConfig}
          renderPage={this.renderPage}
          onPostPush={() => this.onPostPush()}
          onPostPop={() => this.onPostPop()}
        />
      </Page>
    );
  }
}

export default App;
