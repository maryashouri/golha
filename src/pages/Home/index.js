import React from 'react'
import { Button, Page } from 'react-onsenui'
import SecondPage from '../Users/index'
import './style.scss'
import Detail from '../Detail'

const MainPage = ({ pushPage }) => {
  const colorArray = [
    '#F1948A',
    '#D7BDE2',
    '#85C1E9',
    '#73C6B6',
    '#020ca1',
    '#D7BDE2',
    '#85C1E9',
    '#73C6B6',
    '#020ca1'
  ]

  return (
    <Page>
      <div
        style={{
          textAlign: 'center',
          margin: '0 auto'
        }}
      >
        <h1>به اپلیکیشن گلها خوش آمدید</h1>
        <Button className="btn" onClick={() => pushPage(SecondPage, 'افراد')}>
          افراد
        </Button>
      </div>
      <div className="slider">
        {colorArray.map((value, index) => {
          return (
            <div
              onClick={() => pushPage(Detail, colorArray[index])}
              key={index}
              className="slider-box"
              style={{ backgroundColor: value }}
            ></div>
          )
        })}
      </div>
    </Page>
  )
}

export default MainPage
