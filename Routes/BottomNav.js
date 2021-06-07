import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BlogStack from './BlogStack';
import HomeStack from './HomeStack';
import LearnStack from './LearnStack';


export default function BottomNav(){
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="خانه"
                screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'خانه') {
                        iconName = 'home';

                    } else if (route.name === 'وبلاگ') {
                        iconName = 'newspaper';

                    } else if (route.name === 'آموزش') {
                        iconName = 'book-reader';
                    }

                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                }
                })}
                tabBarOptions={{
                    activeTintColor: '#63CCFF',
                    inactiveTintColor: '#BCBCBC'
                }}>

                <Tab.Screen name="وبلاگ" component={BlogStack} />
                <Tab.Screen name="خانه" component={HomeStack} />
                <Tab.Screen name="آموزش" component={LearnStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}