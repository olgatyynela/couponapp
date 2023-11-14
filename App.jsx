import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Coupons from './src/Screens/Coupons'
import Todolist from './src/Screens/Todolist'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

export default function App() {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Coupons') {
                            return (
                                <MaterialCommunityIcons
                                    name="ticket"
                                    size={size}
                                    color={color}
                                />
                            )
                        } else if (route.name === 'Tasks') {
                            return (
                                <FontAwesome5
                                    name="tasks"
                                    size={size}
                                    color={color}
                                />
                            )
                        }
                    },
                })}
            >
                <Tab.Screen name="Coupons" component={Coupons} />
                <Tab.Screen name="Tasks" component={Todolist} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
