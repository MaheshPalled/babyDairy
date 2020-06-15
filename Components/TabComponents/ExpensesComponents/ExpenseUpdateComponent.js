import React, { Component, useState } from 'react';
import { Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { cornsilk } from 'color-name';
import ExpensesModal from './ExpensesModal';


export default function ExpenseUpdateComponent() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Button
                icon={<FontAwesomeIcon icon={faPlusSquare} size={26} backgroundColor='black'/>}
                buttonStyle={{ borderRadius: 10, marginLeft: 10, marginRight: 10, backgroundColor:'#4fad6d'}}
                title=' Add an expense' 
                titleStyle={{color:'black', fontStyle:cornsilk}}
                onPress={()=> {setModalVisible(!modalVisible)}}
                />
            <Card
                title='My Recent Expenses'
                titleStyle={{ color: '#4fad6d' }}>
                <Text style={{ marginBottom: 10 }}>
                    The idea with React Native Elements is more about component structure than actual design.
                    </Text>
            </Card>
            <ExpensesModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>

    );
}