import React, { useState } from 'react'
import { View, Text, Image, Pressable, StyleSheet, ActivityIndicator } from 'react-native'
import { useFonts, Poppins_700Bold, Poppins_900Black, Poppins_900Black_Italic, Poppins_800ExtraBold } from '@expo-google-fonts/poppins'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Sora_700Bold } from '@expo-google-fonts/sora'
import { router } from 'expo-router'

export default function OnBoardingScreen() {

  const [loading, setLoading] = useState(false);

  // lOADING FONTS
  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_900Black_Italic,
    Poppins_900Black,
    Poppins_800ExtraBold,
    Sora_700Bold,
  });
  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.child1}>
        <View style={styles.containerImage}>
          <Image source={require('../images/pp.png')} style={styles.imagestyles} />
        </View>
      </View>
      <View style={styles.child2}>
        <View style={styles.child2Content}>
          <Text style={styles.heading}>Welcome to CoffeeShop!</Text>
          <Text style={styles.description}>Where quality meets every sip. Elevating coffee excellence, One cup at a time.</Text>
        </View>

        <View style={styles.child2BtnContainer}>
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <>
              <Pressable style={styles.stylesButton} onPress={() => router.push("/(routes)/signup")}>
                <Text style={styles.buttonText}>Create an account</Text>
              </Pressable>

              <Pressable style={styles.stylesButton1} onPress={() => router.push("/(routes)/login")}>
                <Text style={styles.buttonText1}>Log in</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </SafeAreaView >
  )
};

const styles = StyleSheet.create({
  // Styles Main Container
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    padding: 16,
  },
  // Styles First Container
  child1: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  child2Content: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  heading: {
    fontFamily: 'Poppins_900Black',
    fontSize: 44,
    color: '#4e3b31',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginTop: 15,
    fontWeight: '300',
    color: '#4b372c',
    textAlign: 'center',
    lineHeight: 24,
    width: 350,
  },


  // Styles Second Container 
  child2: {
    flex: 5,
    gap: 70,
  },
  child2BtnContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 21,
    width: '100%',
    gap: 16,
    marginBottom: 34,
  },
  stylesButton: {
    width: '100%',
    height: 58,
    borderRadius: 40,
    backgroundColor: '#b37a4f',
    alignItems: 'center',
    justifyContent: 'center',


    // backgroundColor: '#5c261d',
    // backgroundColor: '#8b5e3c',
    // backgroundColor: '#42181a',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  stylesButton1: {
    width: '100%',
    height: 58,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#faf6f3',


    // backgroundColor: '#f4ece6',
    // backgroundColor: '#eee1d8',
  },
  buttonText1: {
    fontSize: 18,
    color: '#4e3b31',
    fontWeight: '500'
  },

  // Image
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyles: {
    width: 390,
    height: 390,
  },
})