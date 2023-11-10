import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';


const TodoList = () => {
  const [todo, setTodo] = useState({desc: '', points: ''});
  const [todos, setTodos] = useState([]);


  const inputChanged = (name, value) => {
    setTodo({...todo, [name]: value});
  };

  const addTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({desc: '', points: ''}); 
  };



  return (
    <View>
      <Text style={styles.headerStyle}>✨Tasks✨</Text>
      <Text style={{alignSelf: 'center', paddingBottom: 20, fontSize: 15}}>Complete a task to earn points.</Text>

      <TextInput style={styles.inputStyle}
        placeholder="Description"
        value={todo.desc}
        onChangeText={(value) => inputChanged('desc', value)}
      />
        <TextInput style={styles.inputStyle}
        placeholder="Points"
        value={todo.points}
        onChangeText={(value) => inputChanged('points', value)}
      />

      <TouchableOpacity style={[styles.button, styles.buttonClose]} onPress={addTodo}>
        <Text style={styles.buttonTextStyle}>Add</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={deleteTodo}>
        <Text>Delete</Text>
      </TouchableOpacity> */}

      <View style={{ height: 700, width: '100%', margin: 'auto', marginTop: 30 }}>
        {todos.map(todo => 
        <View>
            <Text style={styles.todoStyle}>{todo.desc + ' ' + todo.points + ' points'}</Text>
            
        </View>)}
      </View>
    </View>
  );
};

const styles =  StyleSheet.create({
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginVertical: 10,
        backgroundColor: '#2196F3',
        width: 80,
        alignSelf: 'center'
      },
      buttonTextStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      inputStyle: {
        width: '97%',
        padding: 15,
        margin: 5,
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: 10
      },
      headerStyle: {
          fontSize: 35,
          alignSelf: 'center',
          marginTop: 30,
          paddingBottom: 20
      },
      todoStyle: {
        alignSelf: 'center',
        fontSize: 15,
        padding: 8
      }
})

export default TodoList;
