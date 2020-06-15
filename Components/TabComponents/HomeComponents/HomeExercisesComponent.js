import React from 'react'
import { Card, Button, Icon, Avatar, Image } from 'react-native-elements';

export default function HomeExercisesComponent(){

    return(
        <Card
        title='Exrecises recommende during pregnancy.'
        titleStyle={{ color: '#4fad6d' }}
        >
        <Image source={{uri:"../../../.assets/PerformSquatsSafelyDuringPregnancyChair_Squats.gif"}} />

        </Card>
    );
}