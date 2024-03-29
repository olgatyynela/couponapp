import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Alert,
} from 'react-native'
import { Todo } from '../Components/Todo'
import { push, ref, onValue } from 'firebase/database'
import { database } from '../database'

const TodoList = () => {
    const [todo, setTodo] = useState({ desc: '', points: '' })
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const todosRef = ref(database, 'tasks/')
        onValue(todosRef, snapshot => {
            const data = snapshot.val()
            const todosWithKeys = data
                ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
                : []
            setTodos(
                todosWithKeys
                    .reverse()
                    .sort((a, b) =>
                        a.isDone === b.isDone ? 0 : a.isDone ? 1 : -1
                    )
            )
        })
    }, [])

    const inputChanged = (name, value) => {
        if (name === 'desc' && value.length < 26) {
            setTodo({ ...todo, [name]: value })
        }
        if (name === 'points' && value.length < 4) {
            setTodo({ ...todo, [name]: value })
        }
    }

    const addTodo = () => {
        if (todo.desc !== '' && todo.points !== '') {
            push(ref(database, 'tasks/'), {
                desc: todo.desc,
                points: todo.points,
                isDone: false,
            })
            setTodo({ desc: '', points: '' })
        } else {
            Alert.alert('Empty task', 'Fill both fields', [{ text: 'OK' }])
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    margin: 'auto',
                    marginTop: 30,
                }}
            >
                <FlatList
                    style={{ flex: 1 }}
                    ListHeaderComponent={
                        <View>
                            <Text
                                style={{
                                    alignSelf: 'center',
                                    paddingBottom: 20,
                                    fontSize: 15,
                                }}
                            >
                                Complete a task to earn points.
                            </Text>

                            <TextInput
                                style={styles.inputStyle}
                                placeholder="Description"
                                value={todo.desc}
                                onChangeText={value =>
                                    inputChanged('desc', value)
                                }
                            />
                            <TextInput
                                keyboardType="number-pad"
                                style={styles.inputStyle}
                                placeholder="Points"
                                value={todo.points}
                                onChangeText={value =>
                                    inputChanged('points', value)
                                }
                            />

                            <TouchableOpacity
                                style={[styles.button, styles.buttonClose]}
                                onPress={addTodo}
                            >
                                <Text style={styles.buttonTextStyle}>
                                    Add task
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    data={todos}
                    renderItem={({ item, index }) => (
                        <Todo todo={item} key={index} />
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 15,
        elevation: 2,
        marginVertical: 10,
        backgroundColor: '#2196F3',
        width: '97%',
        alignSelf: 'center',
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
        backgroundColor: 'white',
        borderRadius: 10,
    },
})

export default TodoList
