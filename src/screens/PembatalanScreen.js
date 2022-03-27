import React from 'react'
import { Image, StyleSheet, View, Text} from 'react-native'

export default function PembatalanScreen({navigation}) {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'#F2F2F2'}}>
            <View>
                <Image style={styles.image} source={require('../picture/batal.png')}></Image>
                <Text style={styles.teks1}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create ({
    image: {
        height: 248,
        width: 330,
        borderRadius:100,
        alignItems: 'Center',
        marginLeft:30,
        marginTop:80,
    },
    teks1: {
        fontSize:15,
        fontWeight:'900',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginBottom:200,
        marginLeft:30,
        color:'#00579C'
    },
});