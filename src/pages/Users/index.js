import React from 'react'
import './style.scss'
import { Button, Page, LazyList, ListItem } from 'react-onsenui'
import { useFetch } from '../../hooks/useFetch'
import Menu from '../../components/Menu'
import ThirdPage from '../User/index'

const SecondPage = ({ pushPage, popPage }) => {
  const [data1] = useFetch('https://reqres.in/api/users?page=1')
  const [data2] = useFetch('https://reqres.in/api/users?page=2')
  const [data3] = useFetch('https://reqres.in/api/users?page=1')
  const [data4] = useFetch('https://reqres.in/api/users?page=2')
  const [data5] = useFetch('https://reqres.in/api/users?page=1')
  const [data6] = useFetch('https://reqres.in/api/users?page=2')
  const [data7] = useFetch('https://reqres.in/api/users?page=2')
  const [data8] = useFetch('https://reqres.in/api/users?page=1')

  const data = [
    ...data1,
    ...data2,
    ...data3,
    ...data4,
    ...data5,
    ...data6,
    ...data7,
    ...data8
  ]

  return (
    <Page
      renderToolbar={() => <Menu title="لیست افراد " onBackButton={popPage} />}
    >
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
      </div>
      <Button className="back-btn" onClick={popPage}>
        برگشت به صفحه اصلی
      </Button>
      <Button className="back-btn" onClick={() => pushPage(ThirdPage, 1)}>
        بعدی
      </Button>
    </Page>
  )
}

export default SecondPage
