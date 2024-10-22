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
import React, { useContext, useEffect, useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { router } from "expo-router";
import TextInput from "../components/TextInput";
import { AppContext } from "@/components/ContextProvider";

const signupImg = require("../assets/images/logo_dark.png");

export const countries = [
  {
    name: "Kuwait",
    dialcode: "+965",
    image: require("../assets/images/kuwait.png"),
  },
  {
    name: "United Arab Emirates",
    dialcode: "+971",
    image: require("../assets/images/uae.png"),
  },
  {
    name: "Qatar",
    dialcode: "+974",
    image: require("../assets/images/qatar.png"),
  },
  {
    name: "Oman",
    dialcode: "+968",
    image: require("../assets/images/oman.png"),
  },
  {
    name: "Bahrain",
    dialcode: "+973",
    image: require("../assets/images/bahrain.png"),
  },
  {
    name: "Saudi Arabia",
    dialcode: "+966",
    image: require("../assets/images/saudiarabia.png"),
  },
];

const CountriesPage = () => {
  const { user, setUser } = useContext(AppContext);
  useEffect(() => {
    setUser((prev: any) => {
      return { ...prev, country: prev.country || countries[0] };
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#f3f4f6"} barStyle={"dark-content"} />
      <ScrollView
        bounces={false}
        style={tw`w-full flex-1`}
        contentContainerStyle={styles.scrollContainer}
      >
        <Image source={signupImg}></Image>
        <Text style={tw`text-center text-2xl font-bold`}>{""}</Text>
        <Text style={tw`text-center text-2xl font-bold`}>
          {"Choose a preferred country"}
        </Text>
        <Text style={tw`text-center text-2xl font-bold`}>{""}</Text>
        {new Array(Math.ceil(countries.length / 3)).fill(0).map((_, index1) => (
          <View key={index1} style={tw`flex-row pb-8`}>
            {countries.slice(index1 * 3, index1 * 3 + 3).map((item, index2) => {
              return (
                <TouchableOpacity
                  key={index2}
                  onPress={() => {
                    setUser((prev: any) => ({ ...prev, country: item }));
                  }}
                >
                  <Image
                    source={item.image}
                    style={[
                      tw`rounded-full w-16 h-16 ${
                        index1 % 2 > 0 ? "mx-6" : "mx-3"
                      }`,
                      item === user.country
                        ? { borderColor: "#B9271B", borderWidth: 4 }
                        : {},
                    ]}
                  ></Image>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </ScrollView>

      <View style={tw`flex-row pb-8 px-3`}>
        <TouchableOpacity
          style={[
            tw`flex-1 p-3 mx-1 rounded-full border`,
            ,
            { borderColor: "##B9271B" },
          ]}
          onPress={() => {
            router.back();
          }}
        >
          <Text
            style={[
              tw`text-2xl text-center font-semibold`,
              { color: "#B9271B" },
            ]}
          >
            {"Back"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-1 p-3 mx-1 rounded-full`,
            ,
            { backgroundColor: "#B9271B" },
          ]}
          onPress={() => {
            router.dismissAll();
            router.replace("/signup");
          }}
        >
          <Text style={tw`text-2xl text-white text-center font-semibold`}>
            {"Continue"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CountriesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    width: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 100,
  },
});
