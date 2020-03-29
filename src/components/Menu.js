import React, { useState } from 'react'
import {
  BackButton,
  Toolbar,
  Splitter,
  SplitterSide,
  SplitterContent,
  Page,
  List,
  ListItem,
  ToolbarButton,
  Icon
} from 'react-onsenui'
import MainPage from '../pages/Home/index'

const Menu = ({ title, onBackButton = null }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }
  const renderToolbar = () => {
    return (
      <Toolbar>
        <div className="right">{title}</div>
        <div className="left">
          <ToolbarButton onClick={onOpen}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    )
  }
  return (
    <Splitter>
      <SplitterSide
        style={{
          boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
        }}
        side="left"
        width={200}
        collapse={true}
        swipeable={true}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <Page>
          <List
            dataSource={['Profile', 'Followers', 'Settings']}
            renderRow={title => (
              <ListItem key={title} onClick={onClose} tappable>
                {title}
              </ListItem>
            )}
          />
        </Page>
      </SplitterSide>
      <SplitterContent>
        <Page renderToolbar={renderToolbar}></Page>
      </SplitterContent>
    </Splitter>
  )
}
export default Menu
