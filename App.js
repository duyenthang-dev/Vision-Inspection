import AppLoading from 'expo-app-loading'
import React, { } from 'react'

import thunk from 'redux-thunk'
import rootReducer from './redux/reducer/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Layout from './components/Layout'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

import {
   useFonts,
   Inter_100Thin,
   Inter_200ExtraLight,
   Inter_300Light,
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold,
   Inter_800ExtraBold,
   Inter_900Black,
} from '@expo-google-fonts/inter'


export default function App({ navigation }) {
   // let [isLogin, setLogin] = useState(false)
   let [fontsLoaded] = useFonts({
      Inter_100Thin,
      Inter_200ExtraLight,
      Inter_300Light,
      Inter_400Regular,
      Inter_500Medium,
      Inter_600SemiBold,
      Inter_700Bold,
      Inter_800ExtraBold,
      Inter_900Black,
   })

   if (!fontsLoaded) {
      return <AppLoading />
   }

   return (
      <Provider store={store}>
         <Layout />
      </Provider>
   )
}
