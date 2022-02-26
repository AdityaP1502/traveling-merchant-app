import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home'
import Merchant from '../screens/Merchant'

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Traveling Merchant' }}/>
        <Stack.Screen name="Merchant" component={Merchant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;