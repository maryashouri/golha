import React, { Component, useState, useEffect } from 'react'
import './styles/index.scss'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import {
  Page,
  Toolbar,
  RouterNavigator,
  RouterUtil,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem,
  ToolbarButton,
  Icon
} from 'react-onsenui'
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

  hide = () => {
    this.setState({ isOpen: false })
  }

  show = () => {
    this.setState({ isOpen: true })
  }
  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">اپلیکیشن گل ها</div>
        <div className="right">
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
          <Page>
            <List
              dataSource={['پروفایل', 'افراد', 'تنظیمات']}
              renderRow={title => (
                <ListItem key={title} onClick={this.hide} tappable>
                  {title}
                </ListItem>
              )}
            />
          </Page>
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
