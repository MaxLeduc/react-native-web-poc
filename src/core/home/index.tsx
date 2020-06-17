import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Home = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.greetingText}>Welcome to the future.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    height: '100vh',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingText: {
    color: 'red',
  },
})

export default Home
