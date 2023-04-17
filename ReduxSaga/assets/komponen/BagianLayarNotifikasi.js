import { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class BagianLayarNotifikasi extends Component {
    render() {
        return (
            <View style={styles.frame}></View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#6aaa3c',
        height: 28,
    },
});

export default BagianLayarNotifikasi;