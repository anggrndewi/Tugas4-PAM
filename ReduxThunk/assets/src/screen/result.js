import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {View, Text, StatusBar, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Card } from "../components";
import { clearForm } from "../redux/information/ticket";

const Result = ({navigation}) =>{
    const dispatch = useDispatch()
    const developer = useSelector((state) => state.developer)
    const ticket = useSelector((state) => state.ticket)

    return(
        <View style={styles.boxframe}>
            <View style={styles.frame}>
                <TouchableOpacity style={styles.iconframe}
                    onPress={() => {
                        navigation.navigate('Home')
                        dispatch(clearForm())
                    }}>
                    <FontAwesome5 style={styles.icon} size={30} name="long-arrow-alt-left" color="white"/>
                </TouchableOpacity>
                
                <Text style={styles.judul}>HILINGS.ID</Text>
                <FontAwesome5 name="user-alt" size={26} color="white" />
            </View>
            
            <View style={styles.head}>
                <Text style={[styles.textWhite, styles.textCenter]}>Hasil Pencarian Penerbangan </Text>
                <Text style={[styles.textWhite, styles.textCenter]}>({ ticket.date })</Text>
            </View>
        
            <ScrollView Style={{flexGrow: 1}}>
                <Card/>
            </ScrollView>

            <View style={styles.framefooter}>
                <Text style={{ textAlign: 'center' }}>
                    Copyright { developer.name } - { developer.nim }
                </Text>
            </View>
            <StatusBar style="auto"/>
        </View>
    )
}
const styles = StyleSheet.create({
    boxframe: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#f2f2f',
        marginTop: -28,
    },

    head: {
        textAlign: 'center',
        backgroundColor: '#6aaa3c',
        paddingVertical: 18,
        marginTop: 46,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
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
        backgroundColor: '#6aaa3c',
    },
    iconframe: {
        width: 46,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    judul: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30,
    },

    framefooter: {
        flex: 1,
        position: 'absolute',
        bottom: 10,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 50,
    },

    textWhite: {
        marginTop:5,
        color: '#fff',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default Result;