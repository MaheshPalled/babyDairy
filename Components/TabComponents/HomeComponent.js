import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { Component } from 'react';
import HomeProgressChartComponent from './HomeComponents/HomeChartComponent';
import HomeEmergencyContactComponent from './HomeComponents/HomeEmergencyContactComponent';
import HomeAppointmentComponent from './HomeComponents/HomeAppointmentComponent';
import HomeExercisesComponent from './HomeComponents/HomeExercisesComponent';

export default class Home extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <HomeProgressChartComponent />
                <HomeEmergencyContactComponent />  
                <HomeAppointmentComponent />
                <HomeExercisesComponent />
                </ScrollView>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});