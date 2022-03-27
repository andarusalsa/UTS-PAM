import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { Platform,StyleSheet, Text, View, Image, TextInput } from 'react-native';


export default function BerandaScreen ({navigation}) {
    return (
      <View style={{flex: 1}} >
        <View style={{backgroundColor: '#F2F2F2', flex: 1}}>
          <View style={styles.menu}>
            <Text style={styles.kapalzy}>Kapalzy</Text>
            <Text style={styles.daftar}>Pelabuhan Awal</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Pelabuhan Awal"/>
            </View>
            <Text style={styles.daftar}>Pelabuhan Tujuan</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Pelabuhan Tujuan"/>
            </View>
            <Text style={styles.daftar}>Layanan</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Layanan"/>
            </View>
            <Text style={styles.daftar}>Tanggal Masuk</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Tanggal Masuk"/>
            </View>
            <Text style={styles.daftar}>Jam Masuk</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Jam Masuk"/>
            </View>
            <Text style={styles.daftar}>Kategori</Text>
            <View style={styles.input}>
              <TextInput style={styles.InputTeks} placeholder = "Pilih Kategori"/>
            </View>
          </View>
        </View>
        <View style={styles.navigasi}>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width:35, height:36}} source={require('../picture/home.png')}/>
            <Text style={{fontSize: 11, color:'#00579C', marginTop:2}}>Home</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width:35, height:36}} source={require('../picture/pesanan.png')}/>
            <Text style={{fontSize: 11, color:'#00579C', marginTop:2}}>Pesanan Saya</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width:35, height:36}} source={require('../picture/pembatalan.png')}/>
            <Text style={{fontSize: 11, color:'#00579C', marginTop:2}}>Pembatalan</Text>
          </View>
          <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{width:35, height:36}} source={require('../picture/lainnya.png')}/>
            <Text style={{fontSize: 11, color:'#00579C', marginTop:2}}>Lainnya</Text>
          </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  menu: {
    fileDirection: 'row', 
    width: 350, 
    height: 500, 
    backgroundColor: '#FFFFFF', 
    marginHorizontal: 12, 
    marginVertical: 50, 
    borderRadius: 4,
  },
  kapalzy: {
    fontSize: 30,
    
    fontWeight: 800,
    color: '#00579C',
    marginLeft: 128,
    marginTop: 20
  },
  navigasi:{
    height: 69, 
    flexDirection:'row', 
    backgroundColor: '#F4F4F4', 
    borderWidth : 3, 
    borderColor: '#E5E5E5'
  },
  daftar: {
    fontSize: 16,
    fontWeight: 400,
    marginLeft: 23,
    color: '#9D9D9D',
  },
  input:{
    backgroundColor: "#EFF4F4",
    borderRadius: 4,
    width: 300,
    height: 37,
    marginBottom: 15,
    justifyContent: 'center',
    marginLeft:23,
  },
  InputTeks:{
    height: 50,
    width: 300 ,
    flex: 1,
    padding: 10,
  }

});