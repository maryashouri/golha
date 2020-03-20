import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import * as Ons from 'react-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

const Users = () => {
  const [data, loading] = useFetch('https://reqres.in/api/users?page=1')

  return (
    <Ons.Page renderToolbar={() => <Ons.Toolbar title="لیست افراد" />}>
      <h1 style={{ textAlign: 'center' }}> به اپلیکیشن گل ها خوش آمدید</h1>
      <div style={{ height: 100 }}></div>
      <Ons.ListTitle> لیست افراد</Ons.ListTitle>
      <Ons.List
        modifier="inset"
        dataSource={data}
        renderHeader={() => (
          <Ons.ListHeader style={{ fontSize: 15 }} className="testClass">
            {' '}
            اسامی{' '}
          </Ons.ListHeader>
        )}
        renderRow={user => (
          <Ons.ListItem>
            <Link
              props={user}
              className="center"
              to={{
                pathname: `/users/${user.id}`,
                state: {
                  user
                }
              }}
            >
              {user.first_name}
            </Link>
          </Ons.ListItem>
        )}
      ></Ons.List>
    </Ons.Page>
  )
}
export default Users
