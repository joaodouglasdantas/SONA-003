import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './src/screens/OnboardingScreen';
import CheckInScreen from './src/screens/CheckInScreen';
import AvatarScreen from './src/screens/AvatarScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  CheckIn: undefined;
  Avatar: undefined;
  Emergency: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="CheckIn" component={CheckInScreen} options={{ title: 'Como você está?' }} />
        <Stack.Screen name="Avatar" component={AvatarScreen} options={{ title: 'Seu espelho' }} />
        <Stack.Screen name="Emergency" component={EmergencyScreen} options={{ title: 'Ajuda imediata' }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
