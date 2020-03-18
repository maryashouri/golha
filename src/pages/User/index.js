import React from 'react'
import * as Ons from 'react-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

const User=(props)=>{
   const {user}=props.location.state
  return (
      
         <Ons.Page style={{textAlign:"center"}} >
             <h1 style={{textAlign:"center"}}>  نمایش اطلاعات فرد</h1>
              <h2>{user.first_name}{user.last_name}</h2>
              <h3>{user.email}</h3>
              <img src={user.avatar}/>
          </Ons.Page>

    ) 
}


export default User
