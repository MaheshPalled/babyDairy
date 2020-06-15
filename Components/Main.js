import React, { Component } from 'react';
import Home from './TabComponents/HomeComponent';
import ToDo from './TabComponents/ToDoComponent';
import Settings from './TabComponents/SettingsComponent';
import Expenses from './TabComponents/ExpensesComponent';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBaby,faDollarSign,faGripVertical, faClipboard } from '@fortawesome/free-solid-svg-icons';


const Tab = createMaterialBottomTabNavigator();

export default class Main extends Component {


    render() {
        return (
            <Tab.Navigator
                initialRouteName='home'
                activeColor='#f0edf6'
                inactiveColor='#090a09'
                barStyle={{ backgroundColor: '#4fad6d' }}
            >
                <Tab.Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={faBaby} color={color} size={26} />
                          ),
                    }}
                />
                <Tab.Screen 
                    name='toDo' 
                    component={ToDo} 
                    options={{
                        tabBarLabel: 'To-do',
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={faClipboard} color={color} size={26}/>
                          ),
                    }}
                    />
                <Tab.Screen 
                    name='expenses' 
                    component={Expenses} 
                    options={{
                        tabBarLabel: 'Expenses',
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={faDollarSign} color={color} size={26}/>
                          ),
                    }}/>
                <Tab.Screen 
                    name='Settings' 
                    component={Settings} 
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <FontAwesomeIcon icon={faGripVertical} color={color} size={26} />
                          ),
                    }}/>
            </Tab.Navigator>
        );
    }

}