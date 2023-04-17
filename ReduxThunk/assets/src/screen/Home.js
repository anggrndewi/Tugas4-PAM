import React from "react";
import { useSelector } from "react-redux";
import {StyleSheet, View, Text, StatusBar, KeyboardAvoidingView} from 'react-native';
import { Forms } from "../components";
import { FontAwesome5 } from '@expo/vector-icons';

const Home = () =>{
    const developer = useSelector((state) => state.developer);

    return(
        <View style={styles.boxframe}>
            <View style={styles.backgroundBanner} />
                <View style={styles.frame}>
                    <FontAwesome5 style={styles.icon} name="bars" size={33} color="white" />
                    <Text style={styles.judul}>HILINGS.ID</Text>
                    <FontAwesome5 name="user-alt" size={25} color="white" />
                </View>
            <KeyboardAvoidingView>
                <Forms/>
            </KeyboardAvoidingView>

            <View style={styles.framefooter}>
                <Text style={{ textAlign: 'center' }}>
                    Copyright { developer.name } - { developer.nim }
                </Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}
const styles = StyleSheet.create({
    boxframe: {
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgb(242, 242, 242)',
    },

    backgroundBanner: {
        height: 330,
        width: '100%',
        backgroundColor: 'rgb(106, 170, 60)',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginTop: -48,
        position: 'absolute',
    },

    frame: {
        marginBottom: 0,
        position: 'absolute',
        zIndex: 2,
        marginTop: 28,
        top: 0,
        left: 0,
        width: '100%',
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(106, 170, 60)',
    },
    iconframe: {
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: '#FFF',
    },
    judul: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },

    framefooter: {
        flex: 1,
        position: 'absolute',
        bottom: 10,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 50,
    },
});

export default Home;