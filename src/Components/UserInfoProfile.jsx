import { IoIosSave } from "react-icons/io";
import useAppStore from "../store/main-store";
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfoProfile = () => {
    const { user, token } = useAppStore(state => ({
        user: state.user,
        token: state.token,
    }))
    const [userInfo, setUserInfo] = useState({})
    const getUserInfo = async () => {
        try {
            const resp = await axios.get("http://localhost:8000/user/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserInfo(resp.data.user)
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getUserInfo()
    }, [])
    return (
        <div>
            <div className='w-5/12 h-[150px]  mx-auto flex gap-4'>
                {/* <button onClick={() => console.log(userInfo)}>Test</button> */}
                {/* profile pic */}
                <div className='w-[150px] h-[150px] flex justify-center relative'>
                    <img className=' object-cover w-full h-full shadow-xl' src={userInfo.userProfilePic} alt="no load" />
                    <p className='absolute bottom-0 text-slate-500 translate-y-4 text-[.6rem]'>CLICK TO UPLOAD</p>
                </div>
                {/* user info */}
                <div className='flex-1 h-full  flex flex-col justify-between'>
                    <div>
                        <div className='w-full flex  gap-2'>
                            <p className='w-4/12 font-bold'>Username :</p>
                            <p className='flex-1'>{userInfo.userName}</p>
                        </div>
                        <div className='w-full flex  gap-2'>
                            <p className='w-4/12 font-bold'>Display Name :</p>
                            <input className='flex-1 border'
                                value={userInfo.userDisplayName} />
                        </div>
                    </div>
                    {/* user rating */}
                    <div className='w-full flex  gap-2 items-baseline'>
                        <p className='w-4/12 font-bold'>User Rating :</p>
                        <div className='flex gap-1 items-baseline'>
                            {
                                Array.from({ length: Math.ceil(userInfo.userRating) }).map((el, idx) => (
                                    <div key={idx} className='w-[10px] h-[10px] rounded-full bg-my-acct'></div>
                                ))
                            }
                            {userInfo.userRating
                                ? <p className='text-xs'>{`(${userInfo.userRating} , ${userInfo.userRatingCount})`}</p>
                                : <p>User not have rating yet.</p>}
                        </div>
                    </div>
                </div>
            </div>
            <form>
                {/* bio */}
                <div className='w-5/12 h-[150px] mx-auto  flex flex-col py-2 mt-3'>
                    <p className='font-bold'>Bio :</p>
                    <textarea className='h-full resize-none border p-2'
                        value={userInfo.userBio}>
                    </textarea>
                </div>
                {/* shippping location */}
                <div className='w-5/12 h-[50px] mx-auto  flex py-2 mt-3 items-center gap-2'>
                    <p className='font-bold w-5/12'>Shipping Location :</p>
                    <input className='h-full resize-none border p-2 w-full'
                        value={userInfo.userLocation} />
                </div>
                {/* shipping address */}
                <div className='w-5/12 h-[150px] mx-auto  flex flex-col py-2 mt-3'>
                    <p className='font-bold'>Shipping Address :</p>
                    <textarea className='h-full resize-none border p-2'
                        value={userInfo.userAddress}>
                    </textarea>
                </div>
                {/* update button */}
                <div className='w-full flex justify-center py-8'>
                    <button className='h-[40px] py-1 w-[200px] bg-my-acct font-bold text-white flex justify-center items-center gap-1 shadow-md hover:bg-my-btn-hover'><IoIosSave className="text-xl" />Update</button>
                </div>
            </form>

        </div>
    )
}

export default UserInfoProfile