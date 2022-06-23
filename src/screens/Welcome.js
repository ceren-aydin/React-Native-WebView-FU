import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native-elements';


export default function WelcomeScreen({ navigation }) {

    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <Image source={require('../../assets/fü.png')} style={styles.Logo} />
            </View>
            <Animatable.View style={styles.Footer} animation="fadeInUpBig">
                <Text style={styles.Title}>Fırat Üniversitesi'ne Hoşgeldiniz</Text>
                <TouchableOpacity
                    style={styles.StartButton}
                    onPress={() => navigation.navigate("Content")}
                    type="outline"
                >
                    <Text style={styles.ButtonText}> Giriş </Text>
                </TouchableOpacity>
            </Animatable.View>
        </View>
    );
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#78113e'
    },
    Header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Logo: {
        width: 350,
        height: 350
    },
    Footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    StartButton: {
        width: 200,
        marginTop: 50,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        borderColor: "#78113e",
        borderWidth: 1
    },
    ButtonText: {
        color: "#78113e",
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center"
    }

});

