import {
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import React, { useEffect, useState } from "react";
import Step from "../components/Step";
import * as Animatable from "react-native-animatable";
import { router } from "expo-router";

const pagesImage = require("../assets/images/intro.png");
const splashImage = require("../assets/images/splash_inner.png");
const splashIcon = require("../assets/images/logo_light.png");
const pagesTitles = [
  "Our guidelines for a safe approach to sellers",
  "All our advertisements are only from reliable sellers",
  "Only positive feedback from our users",
];
const pagesText = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
];

const Splash = () => {
  const [page, setPage] = useState(0);
  const [pageTitleContent, setPageTitleContent] = useState(pagesTitles[0]);
  const [pageTextContent, setPageTextContent] = useState(pagesText[0]);
  const [isVisible, setIsVisible] = useState(0);
  const isDisplay = page > 0 ? 1 : 0;
  useEffect(() => {
    let timeOut1 = setTimeout(() => {
      setPage(1);
    }, 2000);
    return () => clearTimeout(timeOut1);
  }, []);
  useEffect(() => {
    setIsVisible(0);
    let timeOut1 = setTimeout(() => {
      setPageTitleContent(pagesTitles[page - 1]);
      setPageTextContent(pagesText[page - 1]);
      setIsVisible(1);
    }, 200);
    return () => clearTimeout(timeOut1);
  }, [page]);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={tw`w-full h-full bg-red-300`}
        source={splashImage}
        resizeMode="stretch"
      >
        <View style={tw`w-full h-full absolute justify-center items-center`}>
          <Image source={splashIcon} style={tw`w-1/2 h-full`} resizeMode="contain"></Image>
        </View>
        <Animatable.View
          transition={["opacity"]}
          style={[tw`flex-1 w-full bg-white`, { opacity: isDisplay }]}
        >
          <View
            style={[
              tw`rounded-b-full justify-end items-center overflow-hidden bg-gray-100`,
              {
                width: "200%",
                marginLeft: "-50%",
                marginRight: "-50%",
                flex: 4,
              },
            ]}
          >
            <View style={[tw`w-full`, { paddingHorizontal: "25%" }]}>
              <View style={[tw`w-full items-center justify-center`]}>
                <TouchableOpacity style={tw`self-end p-8 py-16`}>
                  <Text
                    style={tw`text-black text-xl`}
                    onPress={() =>
                      setPage((prev) => {
                        if (prev < 3) return prev + 1;
                        else {
                          router.push("/countries");
                          return prev;
                        }
                      })
                    }
                  >
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              style={[tw`w-full flex-1`]}
              source={pagesImage}
              resizeMode="contain"
            />
          </View>
          <Animatable.View
            transition="opacity"
            style={[tw`flex-1 w-full p-4`, { opacity: isVisible }]}
          >
            <Text style={tw`text-center text-3xl font-semibold`}>
              {pageTitleContent}
            </Text>
            <Text style={tw`text-center text-base`}>{""}</Text>
            <Text style={tw`text-center text-xl`}>{pageTextContent}</Text>
          </Animatable.View>

          <View
            style={tw`p-4 w-full py-16 flex-row justify-center items-center`}
          >
            <Step style={tw`mx-1`} filled={page === 1} />
            <Step style={tw`mx-1`} filled={page === 2} />
            <Step style={tw`mx-1`} filled={page === 3} />
          </View>
        </Animatable.View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  arrow: {
    borderRadius: 100,
    width: 50,
    padding: 15,
    height: 50,
    backgroundColor: "#005e57",
  },
  fontArrow: {
    fontFamily: "monospace",
    color: "#ffffff",
    textAlign: "center",
  },
  button: {
    borderRadius: 100,
    height: 50,
    backgroundColor: "#ffffff",
    padding: 13,
  },
  fontButton: {
    fontSize: 16,
    fontFamily: "monospace",
    color: "#005e57",
    textAlignVertical: "top",
  },
});
