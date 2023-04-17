import { Component } from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';
import info from '../Informasi/info';

class Header extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <TouchableHighlight style={styles.iconframe} onPress={() => {}} underlayColor="rgb(173, 217, 140)">
                    <Ionicons style={styles.icon} size={30} name="menu" />
                </TouchableHighlight>
                <View>
                    <Text style={styles.judul}>{info.judul}</Text>
                </View>
                <TouchableHighlight style={styles.iconframe} onPress={() => {}} underlayColor="rgb(173, 217, 140)">
                    <FontAwesome style={styles.icon} size={26} name="user" />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
});

export default Header;