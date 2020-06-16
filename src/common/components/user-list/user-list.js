import React from 'react'
import { FlatList } from 'react-native'
import UserItem from '../user-item/user-item'

const UserList = ({ users }) => {
  return (
    <FlatList
      data={users}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
    />
  )
}

export default UserList
