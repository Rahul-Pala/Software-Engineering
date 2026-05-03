import React from 'react'
import UserName from './UserName'
import UserEmail from './UserEmail'

function UserCard(props) {
  return (
    <div>
      <UserName name={props.name}></UserName>
      <UserEmail email={props.email}></UserEmail>

    </div>
  )
}

export default UserCard
