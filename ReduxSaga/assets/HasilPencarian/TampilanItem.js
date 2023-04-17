import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5.js';

class TampilanItem extends Component {
    constructor(props) {
        super(props);
        this.jadwal = props.data;
    }

    render() {
        return (
            <View style={styles.frame}>

                <View style={{ flexDirection: 'row', marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>({ this.jadwal.keberangkatan.nama })</Text>
                    <Text style={{ marginHorizontal: 13 }}>-</Text>
                    <Text style={{ fontWeight: 'bold' }}>({ this.jadwal.tujuan.nama })</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 13 }}>
                    <View style={styles.iconframe}>
                        <FontAwesome name='plane' size={27} color='#6aaa3c' />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{ this.jadwal.maskapai.nama }</Text>
                </View>

                <View>
                    <Text style={{ textAlign: 'right', color: '#454587', fontWeight: 'bold' }}>({ this.jadwal.TanggalKeberangkatan })</Text>
                </View>

            </View>
        );
    }
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

export default TampilanItem;