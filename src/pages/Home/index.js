import React from 'react'
import { Button, Page } from 'react-onsenui'
import SecondPage from '../Users/index'
import Menu from '../../components/Menu'
import './style.scss'

const MainPage = ({ pushPage }) => {
  return (
    <Page>
      <div
        style={{
          textAlign: 'center',
          margin: 10
        }}
      >
        <h1>به اپلیکیشن گلها خوش آمدید</h1>
        <Button onClick={() => pushPage(SecondPage, 'افراد')}>افراد</Button>
      </div>
    </Page>
  )
}

export default MainPage
