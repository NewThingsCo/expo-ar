import React from 'react'
 import { Text, View } from 'react-native'

 const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

 const MainView = () => (
   <View style={flexCenterStyle}>
     <Text>Hello World!</Text>
   </View>
 )

 export default MainView
 