import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

const navBar = [
    {name: 'Home', icon: require('../assets/images/home.png')},
    {name: 'Favourites', icon: require('../assets/images/favs.png')},
    {name: 'My Car', icon: require('../assets/images/cars.png')},
    {name: 'Messages', icon: require('../assets/images/chat.png')}
]

const addIcon = require('../assets/images/add.png')

const navBarCenter = Math.ceil(navBar.length / 2) 

const showModal = () => {
    return new Promise((resolve) => {
      Alert.alert(
        'Modal',
        'This is an Empty modal',
        [
          {
            text: 'OK',
            onPress: () => resolve('confirmed'),
          },
        ],
        { cancelable: false }
      );
    });
  };

const HomePage = () => {
    const [isModal, setIsModal] = useState(false)
    const transformAngle = isModal ? '45deg' : '0deg'
  return <View style={tw`w-full flex-1 items-center`}>
    <View style={tw`w-full flex-1`}></View>
    <View style={tw`mb-8 p-4 py-5 bg-gray-700 rounded-full h-24 w-11/12`}>
    <View style={tw`flex-row justify-between`}>
        {navBar.slice(0, navBarCenter).map((item, index) => <TouchableOpacity key={index} style={tw`items-center w-16`}>
            <Image source={item.icon} style={tw`w-8 h-8 mb-2`}></Image>
            <Text style={tw`text-xs ${index === 0 ? "text-white" : "text-gray-500"}`}>{item.name}</Text>
        </TouchableOpacity>)}
        <TouchableOpacity style={{marginTop: -50}} activeOpacity={1} onPress={async () => {
            setIsModal(true)
            await showModal()
            setIsModal(false)
        }}>
            <Animatable.View transition={["rotate"]} style={{transform: [{rotate: transformAngle}] }}>
            <Image source={addIcon} style={tw`w-16 h-16`}></Image></Animatable.View>
        </TouchableOpacity>
        {navBar.slice(navBarCenter).map((item, index) => <TouchableOpacity key={index} style={tw`items-center w-16`}>
            <Image source={item.icon} style={tw`w-8 h-8 mb-2`}></Image>
            <Text style={tw`text-xs text-gray-500`}>{item.name}</Text>
        </TouchableOpacity>)}
    </View>
    </View>
  </View>;
};
export default HomePage;
