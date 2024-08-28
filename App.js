import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AwardScreen from './screens/AwardScreen';
import CalendarScreen from './screens/CalendarScreen';
import RingProgress from './components/RingProgress'; 
import TouchButtons from './components/TouchButtons';
import Greetings from './components/Greetings';



  const Stack = createNativeStackNavigator();

  function StackNavigator() {
    return (
       <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Award" component={CalendarScreen} options={{ headerShown: true }}/>
          <Stack.Screen name="Calendar" component={AwardScreen} options={{ headerShown: true }}/>
        </Stack.Navigator>
    )
  }
  
export default function App() {
  
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

  {/*
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
*/}

