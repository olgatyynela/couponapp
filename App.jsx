import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import CouponScreen from './CouponScreen';


export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Coupons" component={CouponScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}