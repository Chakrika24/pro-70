import * as React from 'react';
import { 
 Text,
 View,
 StyleSheet } from 'react-native';

 export default class Writestoryscreen extends React.Component {
     render() {
         return(
             <View style={styles.container}>
                <Text> Read Story </Text>
            </View>
         )
     }

 }

 const styles= StyleSheet.create({
    container: {
           flex: 1,
           backgroundColor: 'white',
           justifyContent: 'center',
           alignItems: 'center'
       }, 
 });