import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import CouponScreen from './CouponScreen';
import Todolist from './Todolist';


export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Coupons" component={CouponScreen}/>
                    <Tab.Screen name="Tasks" component={Todolist}/>
                </Tab.Navigator>
            </NavigationContainer>

    )
}