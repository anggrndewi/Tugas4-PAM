import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { setForm } from "../redux/information/ticket";

const Forms = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const ticket = useSelector(state => state.ticket)

    return(
        <View style={styles.frame}>
            <View style={styles.card}>
                <Text style={styles.label}>Lokasi Keberangkatan</Text>
                <View style={styles.frameinput}>
                    <FontAwesome5 style={styles.icon} name="plane-departure" size={25}/>
                    <TextInput 
                        value={ticket.location}
                        onChangeText={(value) => dispatch(setForm({key: 'location', value}))}
                        style={styles.input} 
                        placeholder="Masukkan Lokasi Keberangkatan"/>
                </View>

                <Text style={styles.label}>Lokasi Tujuan</Text>
                <View style={styles.frameinput}>
                    <FontAwesome5 style={styles.icon} name="plane-arrival" size={25}/>
                    <TextInput 
                        value={ticket.destination}
                        onChangeText={(value) => dispatch(setForm({key: 'destination', value}))}
                        style={styles.input} 
                        placeholder="Masukkan Lokasi Tujuan"/>
                </View>

                <Text style={styles.label}>Tanggal Keberangkatan</Text>
                <View style={styles.frameinput}>
                    <FontAwesome5 style={styles.icon} name="calendar-alt" size={25} />
                    <TextInput 
                        value={ticket.date}
                        onChangeText={(value) => dispatch(setForm({key: 'date', value}))}
                        style={styles.input} 
                        placeholder="Masukkan Tanggal Keberangkatan"/>
                </View>

                <View style={styles.mb3}>
                <Button title="CARI" color="#E47D24" onPress={() => navigation.navigate('Result')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frame: {
        paddingHorizontal: 36,
        marginTop: 90,
    },
    
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },

    mb3: {
        marginBottom: 20,
    },

    frameinput: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        marginBottom: 20,
    },
    iconframe: {
        position: 'absolute',
        width: 38,
        alignItems: 'center',
    },
    icon: {
        color: '#6aaa3c',
    },
    input: {
        flex: 1,
        height: 40,
        padding: 10,
        paddingLeft: 38,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#7a7a7a',
    },

    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2, height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
});

export default Forms;
