import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import Reactotron, { networking } from 'reactotron-react-native'

const linkingUri = Constants.experienceUrl
if (linkingUri !== undefined) {
  const uriSplit = linkingUri.split('/')
  const finalUriSplit = uriSplit[2].split(':')
  Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: `${finalUriSplit[0]}` })
    .useReactNative()
    .use(networking())
    .connect()
}
