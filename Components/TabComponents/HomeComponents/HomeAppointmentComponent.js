import React from 'react';
import { cornsilk } from 'color-name';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';

export default function HomeAppointmentComponent() {

    return (
        <View>
            <Card
                title='My upcoming appointment'
                titleStyle={{ color: '#4fad6d' }} >
                <View>
                    
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component structure than actual design.
                </Text>

                </View>

                <Button
                    icon={<FontAwesomeIcon icon={faBookMedical} size={26} backgroundColor='black' />}
                    buttonStyle={{ borderRadius: 10, margin: 10, backgroundColor: '#4fad6d' }}
                    title='Add an appointment'
                    titleStyle={{ color: 'black', fontStyle: cornsilk }} />
            </Card>
        </View>
    )
}