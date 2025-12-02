import { GlobalStyles } from "@/src/constants/theme";
import { Text, View } from "react-native";

export default function Home() {
  return ([
    <View style={{
      paddingTop: 0,
      height: 20,
      width: 1000,
      backgroundColor: 'white',
    }}></View>,
    <View style={GlobalStyles.container}>
      <View style={{
          paddingTop: 0,
          height: 20,
          width: 1000,
          backgroundColor: 'white',
        }}></View>
      <Text style={GlobalStyles.title}>
        Welcome to <Text style={GlobalStyles.titleBold}>SilentConvo</Text>
      </Text>
      <Text style={GlobalStyles.subtitle}>
        This is a sample application using React Native and Expo Router.
      </Text>
      
    </View>
  ]);
}
