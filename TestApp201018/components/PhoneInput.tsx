import {
  Image,
  Text,
  TextInput as TextInputOrig,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";

export type props = {
  label: string;
  placeholder: string;
  value: string;
  countryImg: any;
  onChangeText: (text: string) => void;
};

export default function PhoneInput({
  label,
  placeholder,
  onChangeText,
  value,
  countryImg,
}: props) {
  return (
    <>
      <Text style={tw`text-lg`}>{label}</Text>
      <View style={tw`flex-row`}>
        <TouchableOpacity style={tw`p-2 px-4 bg-gray-200 rounded-xl h-12`}>
          <Image
            resizeMode="contain"
            source={countryImg}
            style={tw`w-8 h-8`}
          ></Image>
        </TouchableOpacity>
        <TextInputOrig
          style={tw`p-2 px-4 bg-gray-200 rounded-xl text-base flex-1 ml-2`}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        ></TextInputOrig>
      </View>
    </>
  );
}
