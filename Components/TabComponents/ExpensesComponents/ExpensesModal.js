import React, { Component } from "react";
import {
    View,
    Modal,
    Button,
    StyleSheet,
    SafeAreaView
} from "react-native";
import { Input } from 'react-native-elements';

export default function ExpensesModal(props) {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={props.modalVisible}
                >
                    <View style={styles.modal}>
                        <Input
                            placeholder="Expense details"
                            leftIcon={{ type: "font-awesome", name: "user-o" }}
                            leftIconContainerStyle={{ paddingRight: 20 }}
                        />
                        <Input
                            placeholder="Comment"
                            leftIcon={{ type: "font-awesome", name: "comment-o" }}
                            leftIconContainerStyle={{ paddingRight: 20 }}
                        />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Button
                            title="Add"
                            color="#4fad6d"
                            onPress={() => {
                                props.setModalVisible(!props.modalVisible);
                            }}
                        />
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}
)