import React from 'react'
import { Button, Page } from 'react-onsenui'
import Player from '../../components/player/index'

const Detail = ({ data, popPage }) => {
  return (
    <Page>
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <h2>{data}</h2>
        <Player></Player>
        <Button className="back-btn" onClick={popPage}>
          بازگشت
        </Button>
      </div>
    </Page>
  )
}

export default Detail
