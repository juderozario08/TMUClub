import React, { useState } from 'react'
import { KeyboardAvoidingView, View, TextInput, Text, Platform, TouchableOpacity } from "react-native"
import { Styles } from '../Colors';


const SignUp = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [error, setError] = useState('');

    const handleSignup = () => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm password:', confirmPassword);
        console.log('Phone Number:', phoneNumber);
        console.log('Address:', address);
    }

    const inputBoxes = [
        {
            placeholder: 'Username: ',
            autoComplete: 'username',
            value: username,
            secureTextEntry: false,
            keyboardType: 'default',
            onChangeText: text => setUsername(text),
        },
        {
            placeholder: 'Email: ',
            autoComplete: 'email',
            value: email,
            secureTextEntry: false,
            keyboardType: 'email-address',
            onChangeText: text => setEmail(text),
        },
        {
            placeholder: 'Password: ',
            autoComplete: 'password',
            value: password,
            secureTextEntry: true,
            keyboardType: 'default',
            onChangeText: text => setPassword(text),
        },
        {
            placeholder: 'Confirm Password: ',
            autoComplete: 'password',
            value: confirmPassword,
            secureTextEntry: true,
            keyboardType: 'default',
            onChangeText: text => setConfirmPassword(text),
        },
        {
            placeholder: 'Phone Number: ',
            autoComplete: 'tel',
            value: phoneNumber,
            secureTextEntry: false,
            keyboardType: 'phone-pad',
            onChangeText: text => setPhoneNumber(text),
        },
        {
            placeholder: 'Address: ',
            autoComplete: 'street-address',
            value: address,
            secureTextEntry: false,
            keyboardType: 'default',
            onChangeText: text => setAddress(text),
        },
    ]
    return (
        <KeyboardAvoidingView
            style={Styles.MainContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text style={Styles.MainText} className='mb-5'>Please Sign Up</Text>
            <View className='w-full gap-5 py-5 px-2 '>
                {
                    inputBoxes.map((inp, idx) => (
                        <View key={idx} style={Styles.InputBox} className='flex-row justify-self-start'>
                            <Text className='text-gray-500 align-middle self-center'> {inp.placeholder} </Text>
                            <TextInput
                                style={Styles.Input}
                                onChangeText={inp.onChangeText}
                                value={inp.value}
                                autoCapitalize='none'
                                autoComplete={inp.autoComplete}
                                keyboardType={inp.keyboardType}
                                secureTextEntry={inp.secureTextEntry}
                            />
                        </View>
                    ))
                }
            </View>
            <View className='w-full px-10 mb-10'>
                <TouchableOpacity
                    className='bg-sky-600 rounded-3xl py-3 w-full'
                    onPress={handleSignup}
                >
                    <Text className='text-white text-center'>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View className='align-middle justify-center flex-row'>
                <Text className='text-white text-[14px]'>Already have an account?{' '}</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text className='text-[14px] text-sky-600'>Login</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    )
}

export default SignUp;
