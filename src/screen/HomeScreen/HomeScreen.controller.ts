import { useEffect, useRef } from 'react'

import * as Location from 'expo-location'
import { Alert } from 'react-native'
import { IHandles } from 'react-native-modalize/lib/options'

import { IUseHomeController } from './HomeScreen.props'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

export const useHomeController = (): IUseHomeController => {
  const modalizeRef = useRef<IHandles>(null)
  const { getTimeAndTemperature, data } = useTimeAndTemperature()

  const requestLocationPermission = async (): Promise<void> => {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied')
      return
    }

    const location = await Location.getCurrentPositionAsync({})

    void getTimeAndTemperature({
      coords: {
        lat: location.coords.latitude,
        lon: location.coords.longitude
      }
    })
  }

  useEffect(() => {
    void requestLocationPermission()
  }, [])

  const onOpen = (): void => {
    modalizeRef.current?.open()
  }

  return {
    modalizeRef,
    onOpen,
    data
  }
}
