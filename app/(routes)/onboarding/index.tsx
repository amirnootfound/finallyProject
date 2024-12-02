import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import OnBoardingScreen from '@/screens/OnBoarding'

export default function OnBoarding() {
  return (
    <SafeAreaProvider>
      <OnBoardingScreen />
    </SafeAreaProvider>
  )
}