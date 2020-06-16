import React from 'react'
import { FlatList } from 'react-native'

import UserItem from 'common/components/user-item'

import { UserListWrapper } from './styled'

const UserList = ({ users }) => {
  return (
    <UserListWrapper>
      <FlatList
        data={users}
        bounceFirstRowOnMount={true}
        maxSwipeDistance={160}
        renderItem={UserItem}
      />
    </UserListWrapper>
  )
}

export default UserList
