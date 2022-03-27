import React from 'react'
import { StyleSheet, View, Text} from 'react-native'

export default function PesananScreen({navigation}) {
    return (
        <View style={{fileDirection:'row', width: 300,height:250,backgroundColor:'#E9E9E9', marginLeft:35, marginTop:70, borderWidth:1, borderRadius:5}}>
            <Text style={{fontWeight:500, fontSize:18, marginLeft:10}}>Bakauheni  --  Merak</Text>
            <Text style={{fontWeight:400, fontSize:15, marginLeft:10}}>Jadwal Masuk Pelabuhan</Text>
            <Text style={{fontWeight:100, fontSize:13, marginLeft:10}}>Kamis, 17 Maret 2022</Text>
            <Text style={{fontWeight:100, fontSize:13, marginLeft:10}}>15:30 WIB</Text>
            <Text style={{fontWeight:400, fontSize:13, marginLeft:10}}>Layanan</Text>
            <Text style={{fontWeight:100, fontSize:13, marginLeft:10}}>Express</Text>
            <Text style={{fontWeight:300, fontSize:13, marginLeft:10}}>____________________________________________</Text>
            <Text style={{fontWeight:100, fontSize:13, marginLeft:10}}>Dewasa x1  Rp.65.000</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    teks:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily: 'sans-serif',
        marginTop:10,
    },
});