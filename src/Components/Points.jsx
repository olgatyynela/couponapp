import { Text } from 'react-native'
import { PointContext } from '../Context/PointContext'
import { useContext } from 'react'
export const Points = () => {
    const { points } = useContext(PointContext)
    return (
        <Text
            style={{
                paddingRight: 20,
            }}
        >
            Points: {points.points}
        </Text>
    )
}
