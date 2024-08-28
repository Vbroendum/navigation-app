import { useNavigation, useTheme } from "@react-navigation/native";
import { View, Text, Button, TouchableOpacity, StyleSheet, Appearance } from "react-native";
import RingProgress from "../components/RingProgress";
import TouchButtons from "../components/TouchButtons";
import Greetings from "../components/Greetings";
import CalendarScreen from "../screens/CalendarScreen";
import AwardScreen from "../screens/AwardScreen";



export default function HomeScreen() {


    return (
        <View style={styles.container}>
          <Greetings style={styles.greetings}/>
          <RingProgress progress={0.2}/>
          <View style={styles.buttons}>
            <TouchButtons />
          </View>
        </View>
      );
    }


    const styles = StyleSheet.create({
      container: {
      flex: 1,
      paddingTop: 125,
      backgroundColor: 'black',
    },

    calendarButton: {
      bottom: 250,
      display: 'flex',
      justifyContent: 'center',
      borderStyle: 'solid',
      width: '49%',
      padding: 8,
      borderWidth: 1,
      backgroundColor: 'red',
    },

    awardButton: {
      bottom: 250,
      display: 'flex',
      borderStyle: 'solid',
      width: '49%',
      padding: 8,
      borderWidth: 1,
      backgroundColor: 'blue',
  },

});