import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { Todo } from '../Components/Todo'

const TodoList = () => {
    const [todo, setTodo] = useState({ desc: '', points: '' })
    const [todos, setTodos] = useState([])

    const inputChanged = (name, value) => {
        setTodo({ ...todo, [name]: value })
    }

    const addTodo = () => {
        setTodos([todo, ...todos])
        setTodo({ desc: '', points: '' })
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
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRadius: 10,
    },
})

export default TodoList
