import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon, faHospitalUser } from '@fortawesome/react-native-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { cornsilk} from 'color-name';
import { Card, Button, Icon, Avatar } from 'react-native-elements';

export default function HomeEmergencyContactComponent() {

    return (
        <View>
            <Card
                title='My Emergency contact'
                titleStyle={{ color: '#4fad6d' }} >
                <View style={{flexDirection:"row", margin:5}}>
                    <Avatar
                        rounded
                        size='medium'
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text style={{ margin: 10, textAlign:'left' }}>
                        Name: XYZ
                    </Text>
                    <Text style={{ margin: 10, textAlign:'left' }}>
                        Number: XYZ
                    </Text>
                    
                </View>
                <View style={{flexDirection:"row", margin:5}}>
                    <Avatar
                        rounded
                        size='medium'
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                    <Text style={{ margin: 10, textAlign:'left' }}>
                        Name: XYZ
                    </Text>
                    <Text style={{ margin: 10, textAlign:'left' }}>
                        Number: XYZ
                    </Text>
                    
                </View>
                <Button
                    icon={<FontAwesomeIcon icon={faPhoneSquareAlt} size={26} backgroundColor='black' />}
                    buttonStyle={{ borderRadius: 10, margin: 10, backgroundColor: '#4fad6d' }}
                    title=' Add contact'
                    titleStyle={{ color: 'black', fontStyle: cornsilk }} />
            </Card>

        </View>

    );
}

