import React from "react";
import { useSelector } from "react-redux";
import {View, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card = () =>{
    const ticket = useSelector((state) => state.ticket)

    return(
        <View style={styles.frame}>
            <View>
                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>({ ticket.location })</Text>
                    <Text style={{ marginHorizontal: 13 }}>-</Text>
                    <Text style={{ fontWeight: 'bold' }}>({ ticket.destination })</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 13 }}>
                    <MaterialIcons style={styles.iconframe} name="airplanemode-active" size={24} color="#6aaa3c" />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Garuda Indonesia</Text>
                </View>
                
                <View>
                <Text style={{ textAlign: 'right', color: '#454587', fontWeight: 'bold' }}>({ ticket.date })</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 22,
        borderRadius: 8,
        marginBottom: 12,
    },
    iconframe: {
        width: 38,
        height: 38,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ rotateZ: '-90deg' }],
        marginRight: 12,
    },
});
export default Card;