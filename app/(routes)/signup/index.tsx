import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SignUpScreen from '@/screens/SignUp'


export default function index() {
  return (
    <SafeAreaProvider>
        <SignUpScreen />
    </SafeAreaProvider>
  )
}