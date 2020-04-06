import React, { useState } from 'react'
import {

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


const Menu = (props) => {
  console.log(props)
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
        <div className="right"></div>
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
        side="right"
        width={200}
        collapse={true}
        swipeable={true}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      >
        <Page>
          <List
            dataSource={['پروفایل', 'افراد', 'تنظیمات']}
            renderRow={title => (
              <ListItem key={title} onClick={onClose} tappable>
                {title}
              </ListItem>
            )}
          />
        </Page>
      </SplitterSide>
      <SplitterContent>
        <Page renderToolbar={renderToolbar}>{props.children}</Page>
      </SplitterContent>
    </Splitter>
  )
}
export default Menu
