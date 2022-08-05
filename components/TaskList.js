import React, { useState } from 'react';
import { StyleSheet , Text , SafeAreaView , TouchableOpacity} from 'react-native';

export default function TaskList({item , pressHandler}){
    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <Text style = {styles.taskList}>{item.task}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskList : {
        flex : 1,
        width: 300,
        padding : 18,
        marginTop : 16,
        borderColor : '#000',
        borderWidth : 1,
        borderStyle : 'dashed',
        borderRadius : 10,        
    }
})