import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Poppins_500Medium, Poppins_700Bold, Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { Sora_400Regular, Sora_500Medium, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import index from '@/app/(routes)/register';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function VerifyAccountScreen() {

  const [code, setCode] = useState(new Array(4).fill(""));

  const inputs = useRef<any>([...Array(4)].map(() => React.createRef()));

  const handleInput = (text: any, index: any) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1].current.focus();
    }
    if (text === "" && index > 0) {
      inputs.current[index - 1].current.focus();
    }
  };

  let [fontsLoaded, fontError] = useFonts({
    Poppins_700Bold,
    Poppins_900Black,
    Poppins_500Medium,
    Sora_700Bold,
    Sora_400Regular,
    Sora_500Medium,
    Sora_800ExtraBold,
  });
  if (!fontsLoaded && !fontError) {
    return null
  }

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Verification Code.</Text>
      <Text style={styles.subText}>We've sent the verification code to your email address!</Text>

      <View style={styles.inputContainer}>
        {code.map((_, index) => (
          <TextInput
            key={index}
            style={styles.inputBox}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={(text) => handleInput(text, index)}
            value={code[index]}
            ref={inputs.current[index]}
            returnKeyType="done"
            autoFocus={index === 0}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.buttonContainer, { width: width * 1 - 130, justifyContent: 'center', marginBottom: 30 }}>
        <View style={styles.button}>
          <Text
            style={{ color: 'white', fontSize: 20, fontFamily: 'Sora_700Bold' }}
          >
            Submit
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Text>Something Wrong?</Text>
        <TouchableOpacity onPress={() => router.push("/(routes)/register")}>
          <Text style={{color: 'blue'}}>Go Back.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#fff"
  },
  headerText: {
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 10,
    color: '#4e3b31'
  },
  subText: {
    fontSize: 16,
    color: '#4b372c',
    marginBottom: 20,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  inputBox: {
    width: 60,
    height: 60,
    marginRight: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 9
  },


  buttonContainer: {
    marginTop: 30,
  },
  button: {
    backgroundColor: '#b37a4f',
    borderRadius: 10,
    height: 45,

    justifyContent: 'center',
    alignItems: 'center',
  }
})