import React, { useState } from 'react'
import {
  Page,
  Toolbar,
  Splitter,
  SplitterSide,
  SplitterContent,
  List,
  ListItem,
  ToolbarButton,
  Icon
} from 'react-onsenui'

const Menu = (props) => {
  const[isOpen,setIsOpen]=useState(false)

 const  renderToolbar = () => {
    return (
      <Toolbar>
        <div className="center">اپلیکیشن گل ها</div>
        <div className="right">
          <ToolbarButton onClick={show}>
            <Icon icon="ion-navicon, material:md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    )
  }
  const hide = () => {
    setIsOpen(true)
  }

  const show = () => {
    setIsOpen(true)
  }

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
          isOpen={isOpen}
          onClose={hide}
          onOpen={show}
        >
          <Page>
            <List
              dataSource={['پروفایل', 'افراد', 'تنظیمات']}
              renderRow={title => (
                <ListItem key={title} onClick={hide} tappable>
                  {title}
                </ListItem>
              )}
            />
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page  {...props} renderToolbar={renderToolbar}>
          </Page>
        </SplitterContent>
      </Splitter>
  )
}

export default Menu
