import { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5.js';

class FormInputText extends Component {
    render() {
        return (
            <View style={styles.frame}>
                <Text style={styles.label}>{ this.props.label }</Text>
                <View style={styles.frameinput}>
                    <View style={styles.iconframe}>
                        <FontAwesome style={styles.icon} name={this.props.icon} size={18} />
                    </View>
                    <TextInput style={styles.input} onChangeText={() => {}} placeholder={this.props.placeholder}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    frame: {
        //
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 8,
    },
    frameinput: {
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
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
});

export default FormInputText;