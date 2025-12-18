import { GlobalStyles, filter, session } from "@/src/constants/theme";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function Home() {
  return ([
    <View style={ GlobalStyles.container }>
      <ScrollView>
        <Text style={[ GlobalStyles.title, {marginTop: 30} ]}>
          Welcome to <Text style={ GlobalStyles.titleBold }>SilentConvo</Text>
        </Text>
        <Text style={ GlobalStyles.subTitle }>
          Your voice, your story, your support.
        </Text>

        <View style={[ filter.filterContainer, {marginTop: 20} ]}>
        </View>

        <Pressable>
          <View style={[ session.sessionContainer ]}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[ session.sessionContainer, session.sessionType ]}>Group Support</Text>
              <Text style={[ filter.filterContainer, filter.filterText ]}>Live Session</Text>
            </View>
            
            <View>
              <Text style={[ session.sessionTitle ]}>Stress Management in the Workplace</Text>
              <Text style={[ session.sessionDescription ]}>When confronting a stressful work environment, its important to remain calm when one feels overwhelmed. This session aims to</Text>
            </View>

          </View>
        </Pressable>

        <Pressable>
          <View style={[ session.sessionContainer ]}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[ session.sessionContainer, session.sessionType ]}>One on One</Text>
            </View>

            <View>
              <Text style={[ session.sessionTitle ]}>Coping with Anxiety</Text>
              <Text style={[ session.sessionDescription ]}>Anxiety can be overwhelming, but you are not alone. This session provides strategies to manage anxiety and find peace in everyday life.</Text>
            </View>

          </View>
        </Pressable>

        <Pressable>
          <View style={[session.sessionContainer ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[session.sessionType]}>Crisis Intervention</Text>
              <Text style={[filter.filterText]}>Live Session</Text>
            </View>
          </View>
        </Pressable>

        <Pressable>
          <View style={[session.sessionContainer ]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={[session.sessionType]}>Group Support</Text>
              <Text style={[filter.filterText]}>Live Session</Text>
            </View>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  ]);
}
