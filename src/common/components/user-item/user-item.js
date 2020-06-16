import React from 'react'

import { Row, RowIcon, RowData, RowDataText, RowDataSubText } from './styled'

const UserItem = ({ item: user }) => {
  return (
    <Row>
      <RowIcon source={user.picture.medium} />
      <RowData>
        <RowDataText>{`${user.name.title} ${user.name.first} ${user.name.last}`}</RowDataText>
        <RowDataSubText>{user.email}</RowDataSubText>
      </RowData>
    </Row>
  )
}

export default UserItem
