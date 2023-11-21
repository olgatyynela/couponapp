import { View, Text } from 'react-native'
import { useState, useContext } from 'react'
import Checkbox from 'expo-checkbox'
import { PointContext } from '../Context/PointContext'

export const Todo = props => {
    const [isChecked, setChecked] = useState(false)
    const { points, setPoints } = useContext(PointContext)
    return (
        <View
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
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox
                    style={{
                        margin: 8,
                        borderRadius: 4,
                        width: 23,
                        height: 23,
                    }}
                    value={isChecked}
                    onValueChange={() => {
                        if (!isChecked) {
                            setPoints(parseInt(props.todo.points) + points)
                            setChecked(true)
                        }
                    }}
                    color={isChecked ? '#50C878' : undefined}
                />
                <Text style={{ fontSize: 16 }}>{props.todo.desc}</Text>
            </View>

            <Text style={{ fontSize: 16 }}>{props.todo.points} p</Text>
        </View>
    )
}
