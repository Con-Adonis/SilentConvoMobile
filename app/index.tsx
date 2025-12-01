import { GlobalStyles } from "@/src/constants/theme";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>
        Welcome to <Text style={GlobalStyles.titleBold}>SilentConvo</Text>
      </Text>
      <Text style={GlobalStyles.subtitle}>
        This is a sample application using React Native and Expo Router.
      </Text>
    </View>
  );
}
