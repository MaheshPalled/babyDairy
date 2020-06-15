import React, { Component } from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import ExpenseUpdateComponent from './ExpensesComponents/ExpenseUpdateComponent';

export default class Expenses extends Component {

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View >
                    <ExpenseUpdateComponent  />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});