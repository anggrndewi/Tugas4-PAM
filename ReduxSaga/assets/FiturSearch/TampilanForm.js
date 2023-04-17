import { Component } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import FormInputText from './FormInputText';
import {useDispatch, useSelector} from 'react-redux';
import { setForm } from '../Informasi/ticket';
import ticket from '../Informasi/ticket';

class TampilanForm extends Component {
    Cari() {
        this.props.navigation.navigate('HasilPencarian');
    }

    render() {
        return (
            <View style={styles.frame}>
                <View style={styles.card}>
                    <View style={[styles.mb3]}>
                        <FormInputText value={ticket.lokasi} onChangeText={(value) => dispatch(setForm({key:'lokasi', value}))} label="Lokasi Keberangkatan" placeholder="Masukan lokasi keberangkatan" icon="plane-departure" />
                    </View>
                    <View style={[styles.mb3]}>
                        <FormInputText value={ticket.tujuan} onChangeText={(value) => dispatch(setForm({key:'tujuan', value}))} label="Lokasi Tujuan" placeholder="Masukan lokasi tujuan" icon="plane-arrival"/>
                    </View>
                    <View style={[styles.mb3]}>
                        <FormInputText value={ticket.tanggal} onChangeText={(value) => dispatch(setForm({key:'tanggal', value}))} label="Tanggal Keberangkatan" placeholder="Masukan tanggal keberangkatan" icon="calendar" />
                    </View>
                    <View style={[styles.mb3]}>
                        <Button title="CARI" color="#E47D24" onPress={() => this.Cari()} />
                    </View>
                </View>
            </View>
        );
        
    }
}
const Forms = () => {
    const dispatch =useDispatch()
    const ticket = useSelector(state => state.ticket)

}

const styles = StyleSheet.create({
    frame: {
        paddingHorizontal: 36,
        marginTop: 90,
    },
    mb3: {
        marginBottom: 20,
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

export default TampilanForm;