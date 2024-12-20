import 'react-native-gesture-handler';
import React from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/Navigation/AppNavigator'

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={'#fff'} />
      <AppNavigator />
    </>
  )
}