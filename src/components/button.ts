import { Pressable, StyleSheet, Text, View } from "react-native";

export default function customButton( text, onPress, style, textStyle ){
    return (
        <Pressable onPress={onPress}>
          <View style={[styles.buttonContainer, style]}>
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
          </View>
        </Pressable>
    );
}