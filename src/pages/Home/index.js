import React, { useState } from 'react'
import { Button, Page, Carousel, CarouselItem } from 'react-onsenui'
import SecondPage from '../Users/index'
import './style.scss'

const MainPage = ({ pushPage }) => {
  const initialValue = ['#F1948A', '#D7BDE2', '#85C1E9', '#73C6B6', '#020ca1']
  const [items] = useState(initialValue)
  const [index, setIndex] = useState(0)
  const handleChange = e => {
    setIndex(e.activeIndex)
  }

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

        <Carousel
          onPostChange={handleChange}
          itemWidth={100}
          index={index}
          fullscreen
          swipeable
          centered
          autoScroll
          overscrollable
        >
          {items.map((item, index) => (
            <CarouselItem key={index} style={{ backgroundColor: item }}>
              <div style={{ marginTop: '50%', textAlign: 'center' }}>
                Swipe me!
              </div>
            </CarouselItem>
          ))}
        </Carousel>

        <div
          style={{
            textAlign: 'center',
            fontSize: '20px',
            position: 'absolute',
            bottom: '36px',
            left: '0px',
            right: '0px'
          }}
        >
          {items.map((item, index) => (
            <span
              key={index}
              style={{ cursor: 'pointer' }}
              onClick={() => setIndex(index)}
            >
              {index === index ? '\u25CF' : '\u25CB'}
            </span>
          ))}
        </div>
      </div>
    </Page>
  )
}

export default MainPage
