import React, { useState } from 'react';
import { StyleSheet, Text, View , SafeAreaView , TextInput , Button} from 'react-native';

export default function AddTask({submitHandler}){
    const [task , setTask] = useState('');
    const onchangeHolder = (val) => {
        setTask(val);
    };
    return(
        <View>
            <TextInput style = {styles.taskBox}
                placeholder = 'Add Task...'
                onChangeText={(val) => onchangeHolder(val)}
            />
            <Button onPress = {() => submitHandler(task)} title = 'ADD' color = {'#4682b4'}/>
            
        </View>
        

    );
}

const styles = StyleSheet.create({
    taskBox: {
        marginTop : 40,
        marginBottom : 10,
        marginHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd',
    },
})