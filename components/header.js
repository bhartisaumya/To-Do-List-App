import React from 'react';
import { StyleSheet, Text, View , SafeAreaView} from 'react-native';

export default function header(){
    return(
        <SafeAreaView>
        <View style = {styles.header}>
            <Text style = {styles.text}>TODOS</Text>
        </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    header : {
        height : 50,
        width : 400,
        backgroundColor : '#4682b4',
        alignItems : 'center',
        justifyContent: 'center'
    },
    text : {
        fontSize : 35,
        fontWeight: 'bold',
        color : 'white',
    }


});