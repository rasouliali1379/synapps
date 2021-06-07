import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Pages/Home';
import Header from '../Shared/Header';

const Stack = createStackNavigator();

export default function HomeStack (){
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={ () => {
                            return {
                                headerTitle: () => <Header title='Home'/>,
                                headerTitleAlign : "center"
                            }
                        }   
                    }/>
            </Stack.Navigator>
    );
}