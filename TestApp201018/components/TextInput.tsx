import { Text, TextInput as TextInputOrig } from "react-native";
import tw from "tailwind-react-native-classnames";

export type props = {
    label: string,
    placeholder: string,
    value: string,
    isPass?: boolean,
    onChange: (text: string) => void
}

export default function TextInput({label, placeholder, onChange, value, isPass}: props) {
    return (
        <>
      <Text style={tw`text-lg`}>{label}</Text>
      <TextInputOrig style={tw`p-2 px-4 bg-gray-200 rounded-xl text-base`} secureTextEntry={Boolean(isPass)} placeholder={placeholder} onChangeText={onChange} value={value}></TextInputOrig>
      </>
    );
  }
  