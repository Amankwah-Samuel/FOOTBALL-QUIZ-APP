import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Stack} from 'expo-router'
import Colors from '../constants/colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light
  return (
    
    <>
    <StatusBar value= "auto"/>
     <Stack screenOptions={{
headerStyle:{backgroundColor:theme.background},
headerTintColor:theme.text
        }}>
            <Stack.Screen name="index" options={{title:"Home"}}/>
            <Stack.Screen name="about" options={{title:"About page"}}/>
            <Stack.Screen name="contact" options={{title:"Contact us"}}/> 
        </Stack>
    </>
       
  )
}

export default RootLayout

const styles = StyleSheet.create({}) 