import { useTimeAndTemperatureProps } from '@store/timeAndTemperature/timeAndTemperature.props'
import { renderHook } from '@testing-library/react-hooks'
import * as Location from 'expo-location'
import { PermissionResponse, PermissionStatus } from 'expo-location'
import { Alert } from 'react-native'

import { useHomeController } from '../../screen/HomeScreen/HomeScreen.controller'
import useTimeAndTemperature from '../../store/timeAndTemperature/timeAndTemperature'

jest.mock('../../store/timeAndTemperature/timeAndTemperature', () => {
  return jest.fn().mockImplementation(() => ({
    getTimeAndTemperature: jest.fn(),
    data: {}
  }))
})

jest.mock('expo-location')

describe('useHomeController', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should not call getTimeAndTemperature and show an alert if location permission is denied', async () => {
    const mockedUseTimeAndTemperature = useTimeAndTemperature() as jest.Mocked<useTimeAndTemperatureProps>
    const getTimeAndTemperatureMock = mockedUseTimeAndTemperature.getTimeAndTemperature

    const permissionMock: PermissionResponse = {
      status: PermissionStatus.DENIED,
      expires: 'never',
      granted: false,
      canAskAgain: true
    }

    const requestPermissionMock = jest.spyOn(Location, 'requestForegroundPermissionsAsync').mockResolvedValue(permissionMock)
    const getCurrentPositionMock = jest.spyOn(Location, 'getCurrentPositionAsync')

    jest.spyOn(Alert, 'alert')

    const { waitFor } = renderHook(() => useHomeController())

    await waitFor(() => expect(requestPermissionMock).toHaveBeenCalled(), { timeout: 5000 })
    await waitFor(() => expect(getCurrentPositionMock).not.toHaveBeenCalled(), { timeout: 5000 })
    await waitFor(() => expect(getTimeAndTemperatureMock).not.toHaveBeenCalled(), { timeout: 5000 })

    expect(Alert.alert).toHaveBeenCalledWith('Permission to access location was denied')
  })
})
