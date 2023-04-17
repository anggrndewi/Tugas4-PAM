import { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header.js';
import Footer from '../komponen/Footer.js';
import BagianLayarNotifikasi from '../komponen/BagianLayarNotifikasi.js';
import TampilanForm from './TampilanForm.js';

class Cari extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.backgroundBanner} />
                <BagianLayarNotifikasi />
                <Header />
                <TampilanForm navigation={this.props.navigation}/>
                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
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
    textBold: {
        fontWeight: 'bold',
    },
});

export default Cari;