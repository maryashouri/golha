import React, { Component } from 'react'
import './styles/index.scss'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import {
  RouterNavigator,
  RouterUtil,
  Page,
  Toolbar,
  Splitter,
  SplitterContent,
  ToolbarButton,
  Icon
} from 'react-onsenui'
import Menu from './components/Menu'
import MainPage from './pages/Home/index'

class App extends Component {
  constructor(props) {
    super(props)
    const routeConfig = RouterUtil.init([
      {
        component: MainPage,
        props: {
          key: 'main',
          pushPage: (...args) => this.pushPage(...args)
        }
      }
    ])
    this.state = { routeConfig, open: false }
  }

  componentDidMount() {
    window.addEventListener(
      'popstate',
      () => {
        this.popPage()
      },
      false
    )
  }
  pushPage(page, data) {
    const route = {
      component: page,
      props: {
        data,
        popPage: () => this.popPage(),
        pushPage: (...args) => {
          this.pushPage(...args)
        }
      }
    }
    window.history.pushState(
      { name: 'browserBack' },
      'on browser back click',
      window.location.href
    )

    let routeConfig = this.state.routeConfig
    routeConfig = RouterUtil.push({
      routeConfig,
      route
    })
    this.setState({ routeConfig })
  }

  popPage(options = {}) {
    let routeConfig = this.state.routeConfig
    routeConfig = RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: { duration: 0.4 }
      }
    })

    this.setState({ routeConfig })
  }

  onPostPush() {
    const routeConfig = RouterUtil.postPush(this.state.routeConfig)
    this.setState({ routeConfig })
  }

  onPostPop() {
    const routeConfig = RouterUtil.postPop(this.state.routeConfig)
    this.setState({ routeConfig })
  }

  renderPage(route) {
    const props = route.props || {}
    return <route.component {...props} />
  }
  show = () => {
    this.setState({ open: true })
  }

  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="right">اپلیکیشن گل ها</div>
        <div className="left">
          <ToolbarButton onClick={this.show}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    )
  }
  render() {
    return (
      <Splitter>
        <Menu />
        <SplitterContent>
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
        </SplitterContent>
      </Splitter>
    )
  }
}

export default App
