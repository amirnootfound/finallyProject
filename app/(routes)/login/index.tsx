import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import LogIn from '@/screens/LogIn'

export default function Login() {
  return (
    <SafeAreaProvider>
        <LogIn />
    </SafeAreaProvider>
  )
}