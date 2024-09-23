import { IoIosSave } from "react-icons/io";
import useAppStore from "../store/main-store";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const UserInfoProfile = () => {
    const { user, setUser, token } = useAppStore(state => ({
        user: state.user,
        setUser: state.setUser,
        token: state.token,
    }))
    const [userInfo, setUserInfo] = useState({})
    const [input, setInput] = useState({
        userProfilePic: "",
        userDisplayName: "",
        userBio: "",
        userLocation: "",
        userAddress: ""
    })
    const [message, setMessage] = useState("")
    const [ctrlShowMsg, setCtrlShowMsg] = useState({ visibility: "invisible", opacity: 0 })
    const getUserInfo = async () => {
        try {
            const resp = await axios.get("http://localhost:8000/user/", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUserInfo(resp.data.user)
            setUser({ ...user, userIsReady: resp.data.user.userIsReady })
        } catch (err) {
            console.log(err.message)
        }
    }
    const hdlChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
        // console.log(input)
    }
    const ctrlMessage = (msg) => {
        setMessage(msg);
        setCtrlShowMsg({ visibility: 'visible', opacity: 100 })
        setTimeout(() => {
            setCtrlShowMsg({ visibility: 'invisible', opcity: 0 })
        }, 2000)
    }
    const updateUserInfo = async e => {
        e.preventDefault();
        try {
            const resp = await axios.patch("http://localhost:8000/user/update-user", input, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserInfo(resp.data.user);
            ctrlMessage(resp.data.message);
            await getUserInfo();
        } catch (err) {
            ctrlMessage(err.response.data.message);
            await getUserInfo();
        }
    };
    useEffect(() => {
        getUserInfo()
    }, [])
    useEffect(() => {
        if (userInfo) {
            setInput({
                userProfilePic: userInfo.userProfilePic || "",
                userDisplayName: userInfo.userDisplayName || "",
                userBio: userInfo.userBio || "",
                userLocation: userInfo.userLocation || "",
                userAddress: userInfo.userAddress || ""
            });
        }
    }, [userInfo]);
    return (
        <div>
            <div className='w-5/12 h-[150px]  mx-auto flex gap-4'>
                {/* <button onClick={() => console.log(user)}>Test</button> */}
                {/* profile pic */}
                <div className='w-[150px] h-[150px] flex justify-center relative'>
                    <img className=' object-cover w-full h-full shadow-xl' src={input.userProfilePic} alt="no load" />
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
                                value={input.userDisplayName}
                                name="userDisplayName"
                                onChange={hdlChangeInput} />
                        </div>
                        <div className='w-full flex  gap-2'>
                            <p className='w-4/12 font-bold'>Status :</p>
                            <p className='flex-1'>{userInfo.userIsReady ? "Ready" : "Not Ready"}</p>
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
                        value={input.userBio}
                        name="userBio"
                        onChange={hdlChangeInput}>
                    </textarea>
                </div>
                {/* shippping location */}
                <div className='w-5/12 h-[50px] mx-auto  flex py-2 mt-3 items-center gap-2'>
                    <p className='font-bold w-5/12'>Shipping Location :</p>
                    <input className='h-full resize-none border p-2 w-full'
                        value={input.userLocation}
                        name="userLocation"
                        onChange={hdlChangeInput} />
                </div>
                {/* shipping address */}
                <div className='w-5/12 h-[150px] mx-auto  flex flex-col py-2 mt-3'>
                    <p className='font-bold'>Shipping Address :</p>
                    <textarea className='h-full resize-none border p-2'
                        value={input.userAddress}
                        name="userAddress"
                        onChange={hdlChangeInput}>
                    </textarea>
                </div>
                {/* update button */}
                <div className='w-full flex justify-center py-8'>
                    <button className='h-[40px] py-1 w-[200px] bg-my-acct font-bold text-white flex justify-center items-center gap-1 shadow-md hover:bg-my-btn-hover'
                        onClick={updateUserInfo} ><IoIosSave className="text-xl" />Update</button>
                </div>
                {/* res message */}
                <div className={`bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 transition-all duration-500 ${ctrlShowMsg.visibility === 'visible' ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10`}>
                    <div className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-my-bg-card px-20 py-20 transition-all duration-500 border border-my-prim shadow-lg flex flex-col justify-center items-center gap-5`}>
                        <p className="font-bold text-my-acct text-2xl">{message}</p>
                        {/* progress bar */}
                        <div className="w-[200px] h-[15px] bg-my-hover rounded-l-full rounded-r-full relative overflow-hidden">
                            <div className="w-[200px] h-[15px] bg-my-acct rounded-full bouncing-ball"></div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserInfoProfile