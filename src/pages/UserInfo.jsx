import UserInfoProfile from '../Components/UserInfoProfile'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAppStore from "../store/main-store"

const UserInfo = () => {
    const navigate = useNavigate()
    const { user } = useAppStore((state) => ({
        user: state.user,
    }))
    useEffect(() => {
        Object.keys(user).length == 0 ? navigate("/notfound") : null
    }, [])

    return (
        <div className='w-full min-h-[600px] bg-my-bg-main pt-10'>
            <UserInfoProfile />
        </div>
    )
}

export default UserInfo