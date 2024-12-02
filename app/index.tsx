import { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	KeyboardAvoidingView,
	TextInput,
	Button,
	ActivityIndicator
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';
import Login from '../screens/LogIn';
import OnBoardingScreen from '../screens/OnBoarding';

export default function Index() {
	
	const [loading, setLoading] = useState(false);

	return (
		<>
			{loading ? (
				<ActivityIndicator size={'small'} style={{ margin: 28 }} />
			) : (
				<OnBoardingScreen />
			)}
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 20,
		flex: 1,
		justifyContent: 'center'
	},
	input: {
		marginVertical: 4,
		height: 50,
		borderWidth: 1,
		borderRadius: 4,
		padding: 10,
		backgroundColor: '#fff'
	}
});