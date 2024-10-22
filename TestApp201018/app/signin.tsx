import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Text,
  Alert,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { router } from "expo-router";
import TextInput from "../components/TextInput";
import PhoneInput from "@/components/PhoneInput";
import { AppContext } from "@/components/ContextProvider";

const signupImg = require("../assets/images/logo_dark.png");

const SignInPage = () => {
  const { user } = useContext(AppContext);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const isFilled =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ) &&
    phone.length > 8 &&
    phone.startsWith(user?.country?.dialcode || "");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#f3f4f6"} barStyle={"dark-content"} />
      <ScrollView
        bounces={false}
        style={tw`w-full h-full`}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={signupImg}></Image>
        <View style={tw`w-11/12 flex-1`}>
          <Text style={tw`text-center text-2xl font-bold`}>{""}</Text>
          <PhoneInput
            placeholder={user?.country?.dialcode || ""}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            label="Phone number"
            countryImg={user?.country?.image || { uri: "" }}
          ></PhoneInput>
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <TextInput
            label="password"
            isPass
            placeholder="Enter your password"
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <View style={tw`flex-1`}></View>
          <TouchableOpacity
            disabled={!isFilled}
            style={[
              tw`w-full p-3 rounded-full`,
              ,
              { backgroundColor: isFilled ? "#B9271B" : "#906966" },
            ]}
            onPress={() => {
              if(phone !== '+965123456789' || password !== "Abc123?!") {
                Alert.alert('Oops!', 'wrong credentials ...')
              } else {
              router.dismissAll();
              router.replace(`/home`);
              }
            }}
          >
            <Text style={tw`text-2xl text-white text-center font-semibold`}>
              {"Sign in"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-center text-sm`}>{""}</Text>
        <View style={[tw`flex-row justify-center`]}>
          <Text style={tw`text-base`}>{"Don't have an account? "}</Text>
          <TouchableOpacity
            onPress={() => {
              router.dismissAll();
              router.replace(`/signup`);
            }}
          >
            <Text style={[tw`text-base`, { color: "#B9271B" }]}>
              {"Sign up"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-center text-xl`}>{""}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 100,
    alignItems: "center",
  },
});
