import { User } from '.dfx/local/canisters/gyro/gyro.did'
import {create} from 'zustand'
import {persist , createJSONStorage} from 'zustand/middleware'
import { useCallback } from 'react'
import { isObjectEmpty } from '../../utils'
type UserState = {
    user: User,
}
type UserActions = {
    setUser: (user:User) => void
}

export const useUserStore = create(
    persist<UserState & UserActions>(
        (set,get)=>({
            user:{} as User,
            setUser: (user:User) => set({user}),
        }),
        {
            name:'user',
            
        }
    )
)

