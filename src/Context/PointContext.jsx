import { createContext, useState } from 'react'

export const PointContext = createContext(null)
export const PointContextProvider = props => {
    const [points, setPoints] = useState(0)
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
