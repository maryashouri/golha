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
  Icon,
  SplitterSide
} from 'react-onsenui'
import Menu from './components/menu/index'
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
    this.state = { routeConfig, isOpen: false }
  }

  componentDidMount() {
    window.addEventListener(
      'popstate',
      () => {
        this.popPage()
      },
      false
    )
    window.history.pushState(
      { name: 'browserBack' },
      'on browser back click',
      window.location.href
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
    this.setState({ isOpen: true })
  }

  hide = () => {
    this.setState({ isOpen: false })
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
        <SplitterSide
          style={{
            boxShadow:
              '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
          }}
          side="right"
          width={200}
          collapse={true}
          swipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hide}
          onOpen={this.show}
        >
          <Menu />
        </SplitterSide>
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
