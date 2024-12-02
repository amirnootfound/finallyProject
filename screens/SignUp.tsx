import { View, Text, Pressable, TextInput, TouchableOpacity, ActivityIndicator, Button } from 'react-native'
import { StyleSheet } from 'react-native';
import React, { useState } from 'react'
import { Poppins_500Medium, Poppins_700Bold, Poppins_900Black, useFonts } from '@expo-google-fonts/poppins';
import { Sora_400Regular, Sora_500Medium, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, Entypo, FontAwesome, FontAwesome5, Fontisto, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';

export default function SignUpScreen() {

    const [required, setRequired] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [error, setError] = useState({
        password: "",
    });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    // SIGN UP FUNCTION
    const signUp = async () => {
        setLoading(true);
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            alert('Check your emails!');
        } catch (e: any) {
            const err = e as FirebaseError;
            alert('Registration failed: ' + err.message);
        } finally {
            setLoading(false);
        }
    };


    // LOADING FONTS
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


    return (
        <SafeAreaView style={styles.mainContainer}>
            <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                onPress={() => router.push("/(routes)/onboarding")}
                style={{ paddingLeft: 25, paddingTop: 30 }}
            />
            <View style={styles.container}>

                {/* MAIN TITLE */}
                <View style={styles.child1}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            Sign Up
                        </Text>

                        <Text style={styles.description}>
                            Let's Get Started!
                        </Text>
                    </View>
                </View>

                {/* INPUTS */}
                <View style={styles.child2}>
                    <View style={styles.inputContainer}>
                        <View>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                placeholder="Email"
                            />
                            <Fontisto
                                style={styles.errorContainer}
                                name='email'
                                size={20}
                                color={"#a1a1a1"}
                            />
                            {required && (
                                <View style={styles.errorContainer}>
                                    <Entypo
                                        name="cross" size={18} color={"red"}
                                    />
                                </View>
                            )}
                        </View>

                        <View>
                            <TextInput
                                keyboardType="default"
                                secureTextEntry={!isPasswordVisible}
                                style={styles.input}
                                value={password}
                    			onChangeText={setPassword}
                    			placeholder="Password"
                            />
                            <View style={styles.inputIcons}>
                                <SimpleLineIcons
                                    style={styles.lock}
                                    name="lock"
                                    size={20}
                                    color={"#A1A1A1"}
                                />

                                <TouchableOpacity
                                    style={styles.visibleIcon}
                                    onPress={() => setPasswordVisible(!isPasswordVisible)}
                                >
                                    {isPasswordVisible ? (
                                        <Ionicons
                                            name="eye-off-outline"
                                            size={23}
                                            color={"#747474"}
                                        />
                                    ) : (
                                        <Ionicons name="eye-outline" size={23} color={"#747474"} />
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>



                    {/* BUTTON SECTION */}
                    <View style={styles.buttonContainer}>
                        <View style={styles.button_inner}>
                            <TouchableOpacity
                                style={styles.buttonFirst}
                                onPress={signUp}
                            >
                                {loading ? (
                                    <ActivityIndicator size={'large'} color="white" />
                                ) : (
                                    <View>
                                        <Text style={{ color: 'white', fontFamily: 'Sora_700Bold', fontSize: 18 }}>Sign Up</Text>
                                    </View>
                                )}
                            </TouchableOpacity>

                            <View
                                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 20 }}
                            >
                                <TouchableOpacity>
                                    <FontAwesome name="google" size={30} />
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <FontAwesome name="github" size={30} />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={styles.buttonSecond} onPress={() => router.push("/(routes)/login")}>
                                <Text>
                                    Already have an account?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    container: {
        width: '100%',
        flex: 1,
        padding: 22,
        flexDirection: 'column'
    },
    child1: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    child2: {
        flex: 7
    },

    // TITLE CONTAINER
    titleContainer: {
        width: '100%',

    },
    title: {
        color: '#4e3b31',
        fontSize: 52,
        fontFamily: 'Poppins_900Black',
    },
    description: {
        color: '#4b372c',
        fontSize: 14,
        fontFamily: 'Sora_400Regular',
    },


    // INPUTS
    inputContainer: {
        width: '100%',
        rowGap: 20
    },
    input: {
        height: 55,
        backgroundColor: '#faf6f3',
        borderColor: '#4e3b31',
        borderWidth: 1,
        padding: 16,
        paddingLeft: 40,

        borderRadius: 8,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        color: "#4e3b31",
        fontFamily: "Poppins_500Medium"
    },

    inputIcons: {
        position: 'absolute',
    },
    visibleIcon: {
        top: -22,
        left: 317,
    },
    lock: {
        paddingLeft: 10,
        paddingTop: 15
    },

    // BUTTONS
    buttonContainer: {
        marginTop: 20,
        height: 300,
        flexDirection: 'column',
    },
    errorContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 16,
        position: 'absolute',
        top: 18,
        left: -5
    },
    button_inner: {
        gap: 35
    },
    buttonFirst: {
        width: '100%',
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: '#b37a4f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSecond: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 300
    }
})