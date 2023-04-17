import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import info from '../Informasi/info';

class Footer extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Text style={{ textAlign: 'center' }}>Copyright {info.penulis.Nama} - {info.penulis.NIM}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        position: 'absolute',
        bottom: 10,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 50,
    },
});

export default Footer;