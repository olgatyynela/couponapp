import { createContext, useState, useEffect } from 'react'
import { ref, onValue, push } from 'firebase/database'
import { database } from '../database'

export const PointContext = createContext(null)
export const PointContextProvider = props => {
    const [points, setPoints] = useState(0)

    useEffect(() => {
        const pointsRef = ref(database, 'points/')
        onValue(pointsRef, snapshot => {
            const data = snapshot.val()
            // luodaan 1 point objekti jos sitä ei vielä ole
            if (!data) {
                push(ref(database, 'points/'), {
                    points: 0,
                })
            }

            const pointWithKey = data
                ? Object.keys(data).map(key => ({ id: key, ...data[key] }))
                : 0

            setPoints(pointWithKey[0])
        })
    }, [])

    return (
        <PointContext.Provider
            value={{
                points,
                setPoints,
            }}
        >
            {props.children}
        </PointContext.Provider>
    )
}
