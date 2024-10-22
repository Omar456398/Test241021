import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Text,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { router } from "expo-router";
import TextInput from "../components/TextInput";
import PhoneInput from "@/components/PhoneInput";
import { AppContext } from "@/components/ContextProvider";

const signupImg = require("../assets/images/logo_dark.png");

const SignUpPage = () => {
  const { user } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const isFilled =
    username.length > 3 &&
    fullname.length > 3 &&
    (!email || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    ) &&
    phone.length > 8 && phone.startsWith(user?.country?.dialcode || '');
  const passError =
    !password ||
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    )
      ? " \n "
      : "Password should be 8 characters long, with at least one of the following: numbers, capital letters, small letter, and symbols";
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#f3f4f6"} barStyle={"dark-content"} />
      <ScrollView
        bounces={false}
        style={tw`w-full h-full`}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={signupImg}></Image>
        <Text style={tw`text-center text-2xl font-bold`}>{""}</Text>
        <View style={tw`w-11/12`}>
          <TextInput
            label="Username"
            value={username}
            placeholder="Enter your username"
            onChange={(value: string) => setUsername(value.replace(/ /g, ""))}
          />
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <TextInput
            label="Full name"
            value={fullname}
            placeholder="Enter your full name"
            onChange={(value: string) => setFullname(value.replace(/\d/g, ""))}
          />
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <PhoneInput
            placeholder={user?.country?.dialcode || ""}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            label="Phone number"
            countryImg={user?.country?.image || { uri: "" }}
          ></PhoneInput>
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <TextInput
            label="E-mail (optional)"
            value={email}
            placeholder="Example@gmail.com"
            onChange={(value: string) => setEmail(value.replace(/ /g, ""))}
          />
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <TextInput
            label="password"
            isPass
            placeholder="Enter your password"
            value={password}
            onChange={(value: string) => setPassword(value)}
          />
          <Text style={tw`text-center text-sm text-red-500`}>{passError}</Text>
          <Text style={tw`text-center text-gray-500 text-lg`}>
            By creating an account, I agree to Rev Automotive{" "}
            <Text style={tw`font-semibold text-black text-lg`}>
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text style={tw`font-semibold text-black text-lg`}>
              Privacy Policy
            </Text>
            .{"\n"}
          </Text>
          <TouchableOpacity
            disabled={!isFilled}
            style={[
              tw`w-full p-3 rounded-full`,
              ,
              { backgroundColor: isFilled ? "#B9271B" : "#906966" },
            ]}
            onPress={() => {
              router.dismissAll()
              router.replace(`/home`);
            }}
          >
            <Text style={tw`text-2xl text-white text-center font-semibold`}>
              {"Create Account"}
            </Text>
          </TouchableOpacity>
          <Text style={tw`text-center text-sm`}>{""}</Text>
          <View style={[tw`flex-row justify-center`]}>
            <Text style={tw`text-base`}>{"Already have an account? "}</Text>
            <TouchableOpacity
              onPress={() => {
                router.dismissAll()
                router.replace(`/signin`);
              }}
            >
              <Text style={[tw`text-base`, { color: "#B9271B" }]}>
                {"Sign in"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={tw`text-center text-xl`}>{""}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpPage;

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
    justifyContent: "center",
  },
});
