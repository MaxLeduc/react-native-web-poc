import React, { useState, useEffect } from 'react'

import UserList from 'common/components/user-list'

import { Container, StyledActivityIndicator } from './styled'

const Home = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getUsers = async () => {
    const res = await fetch('https://randomuser.me/api/?results=20')
    const { results } = await res.json()
    setUsers([...results])
    setIsLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <Container noSpacer={true} noScroll={true}>
      {isLoading ? (
        <StyledActivityIndicator color="#ff8179" size="large" />
      ) : (
        <UserList users={users} />
      )}
    </Container>
  )
}

export default Home
