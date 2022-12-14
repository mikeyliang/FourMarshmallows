import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import HomeIcon from '../assets/icons/home.svg'
import MapIcon from '../assets/icons/map-pin.svg'
import UserIcon from '../assets/icons/user-circle.svg'

import Logo from '../assets/icons/logo.svg'

export default function Nav(props) {
    
    return (
        <View className="absolute z-10 bottom-0 bg-white w-full pb-6 pt-4 rounded-full">
            <View className="flex flex-row justify-between px-12 items-center">
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} className={`flex flex-col justify-center items-center`} style={{}}>
                    <HomeIcon width={25} height={25} style={{color: props.section === 'Home' ? '#16a34a': '#6b7280'}}/>
                    <Text className={`font-[Inter-Bold] text-xs text-gray-500 ${props.section === 'Home' ? 'text-green-600' : ''}`}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Map')} className={`flex flex-col justify-center items-center`}>
                    <MapIcon width={25} height={25} style={{color: props.section === 'Map' ? '#16a34a': '#6b7280'}}/>
                    <Text className={`font-[Inter-Bold] text-xs text-gray-500 ${props.section === 'Map' ? 'text-green-600' : ''}`}>Map</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Profile')} className={`flex flex-col justify-center items-center`}>
                    <UserIcon width={25} height={25} style={{color: props.section === 'Profile' ? '#16a34a': '#6b7280'}}/>
                    <Text className={`font-[Inter-Bold] text-xs text-gray-500 ${props.section === 'Profile' ? 'text-green-600' : ''}`}>Profile</Text>
                </TouchableOpacity>

            
            </View>
            
        </View>
    )
}