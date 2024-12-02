import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const user = auth().currentUser;

  return (
    <View style={styles.container}>
      <Text>Welcome back {user?.email}</Text>
      <Button title="Sign out" onPress={() => auth().signOut()} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: 'center',
    alignItems: 'center'
  }
})