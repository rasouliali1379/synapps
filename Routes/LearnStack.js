import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Learn from '../Pages/Learn';
import Header from '../Shared/Header';

const Stack = createStackNavigator();

export default function LearnStack (){
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Learn" 
                    component={Learn}
                    options={ () => {
                            return {
                                headerTitle: () => <Header title='Learn'/>,
                                headerTitleAlign : "center"
                            }
                        }
                        
                    }
                    />
            </Stack.Navigator>
    );
}