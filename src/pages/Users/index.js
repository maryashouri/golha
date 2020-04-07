import React from 'react'
import './style.scss'
import { Button, Page, LazyList, ListItem, ProgressBar } from 'react-onsenui'
import { useFetch } from '../../hooks/useFetch'
import ThirdPage from '../User/index'

const SecondPage = ({ pushPage, popPage }) => {
  const [data, loading] = useFetch('https://reqres.in/api/users')
  return (
    <Page>
      {loading ? (
        <ProgressBar indeterminate></ProgressBar>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <LazyList
            modifier="inset"
            length={data.length}
            renderRow={index => (
              <ListItem
                onClick={() => pushPage(ThirdPage, data[index])}
                key={index}
              >
                {data[index].first_name}
              </ListItem>
            )}
            calculateItemHeight={() => 44}
          />
          <Button className="back-btn" onClick={popPage}>
            برگشت به صفحه اصلی
          </Button>
        </div>
      )}
    </Page>
  )
}

export default SecondPage
