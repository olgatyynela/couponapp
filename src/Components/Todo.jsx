import { View, Text, Pressable } from 'react-native'
import { useContext } from 'react'
import Checkbox from 'expo-checkbox'
import { PointContext } from '../Context/PointContext'
import { database } from '../database'
import { update, ref } from 'firebase/database'

export const Todo = props => {
    const { points, setPoints } = useContext(PointContext)
    return (
        <Pressable
            style={{
                display: 'flex',
                alignSelf: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '97%',
                backgroundColor: 'white',
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 1,
                padding: 10,
            }}
            onPress={() => {
                if (!props.todo.isDone) {
                    setPoints(parseInt(props.todo.points) + points)
                    //tässä päivitetään tietokantaan isDone trueksi

                    update(ref(database, `/tasks/${props.todo.id}`), {
                        isDone: true,
                    })
                }
            }}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    style={{
                        margin: 8,
                        borderRadius: 4,
                        width: 23,
                        height: 23,
                    }}
                    value={props.todo.isDone}
                    color={props.todo.isDone ? '#50C878' : undefined}
                />
                <Text
                    style={{
                        fontSize: 16,
                        color: props.todo.isDone ? 'grey' : 'black',
                        textDecorationLine: props.todo.isDone
                            ? 'line-through'
                            : 'none',
                    }}
                >
                    {props.todo.desc}
                </Text>
            </View>

            <Text
                style={{
                    fontSize: 16,
                    color: props.todo.isDone ? 'grey' : 'black',
                }}
            >
                {props.todo.points} p
            </Text>
        </Pressable>
    )
}
