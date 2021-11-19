import { createContext, useEffect, useState } from 'react'
import useKeypress from 'react-use-keypress';
import useKeyPress from '../hooks/useKeyPress';

export const MovementContext = createContext({
    active: false,
    direction: 'ArrowDown',
    X: 90,
    Y: 34,
})

export function MovementProvider({ children }) {

    const { pressedKey, isPressing, X, Y } = useKeyPress()
 
     


	return (
        <MovementContext.Provider value={{
            direction: pressedKey,
            active: isPressing,
            X,
            Y
        }}>
			{children}
		</MovementContext.Provider>
	)
}
