import { View, Text } from 'react-native'
import { useState } from 'react'
import Checkbox from 'expo-checkbox'

export const Todo = props => {
    const [isChecked, setChecked] = useState(false)

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
                    onValueChange={setChecked}
                    color={isChecked ? '#50C878' : undefined}
                />
                <Text style={{ fontSize: 16 }}>{props.todo.desc}</Text>
            </View>

            <Text style={{ fontSize: 16 }}>{props.todo.points} p</Text>
        </View>
    )
}
