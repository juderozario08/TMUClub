import React, { useState } from 'react'
import { SafeAreaView, View, Text, Pressable, TextInput, TouchableOpacity } from 'react-native'
import { Styles } from '../Colors';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <SafeAreaView style={Styles.MainContainer}>
            <Text style={Styles.MainText}>Welcome To </Text>
            <Text style={Styles.MainText}>TMU Dance Club</Text>
            <View className='w-full gap-5 py-5 mt-6'>
                <View>
                    <TextInput
                        style={Styles.InputBox}
                        onChangeText={text => setEmail(text)}
                        value={email}
                        placeholder='Email:'
                        placeholderTextColor='gray'
                        autoCapitalize='none'
                        autoComplete='email'
                    />
                </View>
                <View className=''>
                    <TextInput
                        style={Styles.InputBox}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        placeholder='Password: '
                        placeholderTextColor='gray'
                        autoCapitalize='none'
                        autoComplete='password'
                    />
                </View>
            </View>
            <View className='w-full px-10 mb-12'>
                <TouchableOpacity
                    className='bg-sky-600 rounded-3xl py-3 w-full'
                    onPress={() => {
                        console.log('Login Pressed')
                    }}
                >
                    <Text className='text-white text-center'>Login</Text>
                </TouchableOpacity>
            </View>
            <View className='align-middle justify-center flex-row'>
                <Text className='text-white text-[14px]'>Don't have an account?{' '}</Text>
                <TouchableOpacity onPress={() => {
                    console.log('Sign Up Pressed')
                }}>
                    <Text className='text-[14px] text-sky-600'>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Login;
