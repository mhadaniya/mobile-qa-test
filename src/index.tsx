import React, { ReactElement, useCallback, useEffect, useState } from 'react'

import Constants from 'expo-constants'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components'

import { ModalPopup } from './components/ModalPopup/ModalPopup'
import HomeScreen from './screen/HomeScreen/HomeScreen'
import theme from './theme'
import Storybook from '../.storybook'

export default function App(): ReactElement {
  const [isReady, setIsReady] = useState(false)
  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.ttf'),
    'SF-Pro-Display-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.ttf'),
    'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.ttf'),
    'AlegreyaSans-Bold': require('./assets/fonts/AlegreyaSans-Bold.ttf'),
    'AlegreyaSans-Medium': require('./assets/fonts/AlegreyaSans-Medium.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && isReady) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, isReady])

  useEffect(() => {
    async function prepare(): Promise<void> {
      try {
        await SplashScreen.preventAutoHideAsync()
      } finally {
        setIsReady(true)
      }
    }

    void prepare()
  }, [])

  useEffect(() => {
    void onLayoutRootView()
  }, [onLayoutRootView])

  if (!isReady || !fontsLoaded) {
    return <></>
  }

  let AppEntryPoint = (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <ModalPopup />
        <HomeScreen />
      </ThemeProvider>
    </GestureHandlerRootView>
  )
  // Render Storybook if storybookEnabled is true
  if (Constants.manifest?.extra?.storybookEnabled === 'true') {
    AppEntryPoint = <Storybook />
  }

  return AppEntryPoint
}
