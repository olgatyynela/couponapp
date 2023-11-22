import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Coupons from './src/Screens/Coupons'
import Todolist from './src/Screens/Todolist'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'
import { Points } from './src/Components/Points'
import { PointContextProvider } from './src/Context/PointContext'
import { useFonts, Notable_400Regular } from '@expo-google-fonts/notable'
import { NothingYouCouldDo_400Regular } from '@expo-google-fonts/nothing-you-could-do'

export default function App() {
    let [fontsLoaded, fontError] = useFonts({
        Notable_400Regular,
        NothingYouCouldDo_400Regular,
    })
    if (!fontsLoaded && !fontError) {
        return null
    }
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <PointContextProvider>
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
                    <Tab.Screen
                        name="Coupons"
                        component={Coupons}
                        options={{
                            headerRight: () => <Points />,
                        }}
                    />
                    <Tab.Screen
                        name="Tasks"
                        component={Todolist}
                        options={{
                            headerRight: () => <Points />,
                        }}
                    />
                </Tab.Navigator>
            </PointContextProvider>
        </NavigationContainer>
    )
}
