import { Component } from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import Header from './Header.js';
import TampilanItem from './TampilanItem.js';
import Footer from '../komponen/Footer.js';
import BagianLayarNotifikasi from '../komponen/BagianLayarNotifikasi.js';

class HasilPencarian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jadwal: [
                {
                    id: 'J-01', KodeBandaraAsal: 'CGK', KodeBandaraTujuan: 'AMQ', IdMaskapai: 'MA-01', TanggalKeberangkatan: '17-04-2023 07:45 WIB',
                },
                {
                    id: 'J-02', KodeBandaraAsal: 'CGK', KodeBandaraTujuan: 'UPG', IdMaskapai: 'MA-02', TanggalKeberangkatan: '17-04-2023 12:20 WIB',
                },
                {
                    id: 'J-03', KodeBandaraAsal: 'UPG', KodeBandaraTujuan: 'AMQ', IdMaskapai: 'MA-02', TanggalKeberangkatan: '17-04-2023 06:00 WIB',
                },
            ],
            maskapai: [
                { id: 'MA-01', nama: 'Garuda Indonesia', logo: null },
                { id: 'MA-02', nama: 'Lion Air', logo: null },
            ],
            bandara: [
                { kode: 'AMQ', nama: 'Pattimura' },
                { kode: 'CGK', nama: 'Soekarno-Hatta' },
                { kode: 'UPG', nama: 'Sultan Hassanudin' },
            ],
        };
    }

    getDaftarKeberangakatan() {
        const daftarKeberangkatan = [];
        const { jadwal, maskapai, bandara } = this.state;
        jadwal.forEach((dataJadwal) => {
            const data = { ...dataJadwal };
            data.keberangkatan = bandara.find((item) => item.kode === data.KodeBandaraAsal);
            data.tujuan = bandara.find((item) => item.kode === data.KodeBandaraTujuan);
            data.maskapai = maskapai.find((item) => item.id === data.IdMaskapai);
            daftarKeberangkatan.push(data);
        });
        return daftarKeberangkatan;
    }

    renderList({ item }) {
        return <TampilanItem data={item}/>;
    }

    render() {
        const daftarKeberangkatan = this.getDaftarKeberangakatan();

        return (
            <View style={styles.frame}>
                <BagianLayarNotifikasi />
                <Header navigation={this.props.navigation}/>

                <View style={styles.head}>
                    <Text style={[styles.textWhite, styles.textCenter]}>Hasil Pencarian Keberangkatan</Text>
                    <Text style={[styles.textWhite, styles.textCenter]}>16-03-2023</Text>
                </View>

                <SafeAreaView style={{ padding: 12 }}>
                    <FlatList
                        data={daftarKeberangkatan}
                        renderItem={this.renderList}
                        keyExtractor={(item) => item.id}
                    />
                </SafeAreaView>

                <Footer />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#f2f2f2',
    },
    head: {
        textAlign: 'center',
        backgroundColor: '#6aaa3c',
        paddingVertical: 18,
        marginTop: 46,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    textWhite: {
        color: '#fff',
    },
    textCenter: {
        textAlign: 'center',
    },
});

export default HasilPencarian;