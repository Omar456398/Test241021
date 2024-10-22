import { StyleProp, View } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import tw from "tailwind-react-native-classnames";
import * as Animatable from "react-native-animatable";

const Step = ({
  style,
  filled,
}: {
  style?: StyleProp<any>;
  filled?: Boolean;
}) => {
  const [innerViewWidth, setInnerViewWidth] = useState(filled ? 40 : 10);
  const [innerViewColor, setInnerViewColor] = useState(
    filled ? "#000" : "#777"
  );

  useEffect(() => {
    setInnerViewWidth(filled ? 40 : 10);
    setInnerViewColor(filled ? "#000" : "#777");
  }, [filled]);

  return (
    <View>
      <Animatable.View
        transition={["width", "backgroundColor"]}
        style={[
          tw`rounded-full`,
          style || {},
          { width: innerViewWidth, height: 10, backgroundColor: innerViewColor },
        ]}
      />
    </View>
  );
};

export default Step;
