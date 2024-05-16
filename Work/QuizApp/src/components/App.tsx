import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import QuestionScreen from 'D:/Work/QuizApp/src/components/QuestionScreen';
import LeaderboardScreen from 'D:/Work/QuizApp/src/components/LeaderboardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionScreen">
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} options={{ title: 'Quiz' }} />
        <Stack.Screen name="LeaderboardScreen" component={LeaderboardScreen} options={{ title: 'Leaderboard' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
