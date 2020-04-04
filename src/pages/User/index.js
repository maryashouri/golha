import React from 'react'
import { Button, Page } from 'react-onsenui'

const ThirdPage = ({ data, popPage }) => {
  const user = data
  return (
    <Page>
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <h2>
          {user.first_name}
          {user.last_name}
        </h2>
        <h3>{user.email}</h3>
        <div className="img-container">
          <img src={user.avatar}  alt="golha"/>
        </div>
        <Button className="back-btn" onClick={popPage}>
          بازگشت
        </Button>
      </div>
    </Page>
  )
}

export default ThirdPage
