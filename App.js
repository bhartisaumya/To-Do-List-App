import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {StyleSheet, Text, View , Alert , FlatList , TouchableWithoutFeedback , Keyboard} from 'react-native';
import Header from './components/header';
import AddTask from './components/addTask';
import TaskList from './components/TaskList';

export default function App() {
  const [todos , setTask] = useState([
    {task : 'Complete Maths Assigment' , key : '1'},
    {task : 'Exercise' , key : '2'},
    {task : 'Call Maeve' , key : '3'},
  ]);
  const submitHandler = (text) => {
    if(text.length > 3){
      setTask((prevTodos) => {
        return[
          {task : text , key : Math.random().toString()},
          ...prevTodos
        ];
      })
    }
    else{
      Alert.alert('OOPS' , 'The length is too small' , [{text:'Understood'}]);
    }
  }
  function pressHandler(key) {
    setTask((prevTodos) => {
      return prevTodos.filter(task => task.key != key);
    });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() }>
      <View style={styles.container}>
        <Header/>
        <View style = {styles.content}>
          <AddTask submitHandler = {submitHandler}/>
        </View>
        <View style = {styles.listView}>
        <FlatList
          data = {todos}
          renderItem = {({item}) => (
            <TaskList item = {item} pressHandler = {pressHandler} />
          )}
        />
        </View>      
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  content: {
    //flex : 1,
    alignContent : 'center',    
  },
  listView : {
    flex : 1,
    marginTop : 10,
  }

});
