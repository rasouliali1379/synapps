import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Blog from '../Pages/Blog';
import Header from '../Shared/Header';

const Stack = createStackNavigator();

export default function BlogStack (){
    return (
            <Stack.Navigator>
                <Stack.Screen 
                    name="Blog" 
                    component={Blog}
                    options={ () => {
                            return {
                                headerTitle: () => <Header title='Blog'/>,
                                headerTitleAlign : "center"
                            }
                        }
                        
                    }
                    />
            </Stack.Navigator>
    );
}