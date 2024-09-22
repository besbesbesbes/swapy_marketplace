import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
// import { data_users } from "../data/data_users";
import useAppStore from "../store/main-store";
import axios from "axios";
import { RiSwap2Line } from "react-icons/ri";

export default function ShowLogin({ ctrlShowLogin, setCtrlShowLogin }) {
    const { visibility, opacity } = ctrlShowLogin;
    const [loginErr, setLoginErr] = useState(false)
    const [RegisErr, setRegisErr] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [errMessage, setErrMessage] = useState("")
    const { token, setToken } = useAppStore(state => ({
        token: state.token,
        setToken: state.setToken,
    }))
    const { user, setUser } = useAppStore((state) => ({
        user: state.user,
        setUser: state.setUser,
    }))
    const [input, setInput] = useState({
        inputUser: "",
        inputPass: "",
        inputNewUser: "",
        inputNewEmail: "",
        inputNewPass: "",
        inputNewPassConfirm: ""
    })
    const hdlInput = e => {
        setInput(prv => ({ ...prv, [e.target.name]: e.target.value }))
    }
    const hdlLogin = async (e) => {
        e.preventDefault()
        try {
            const resp = await axios.post("http://localhost:8000/auth/login", {
                name: input.inputUser,
                password: input.inputPass
            })
            if (resp.data.token) {
                console.log(resp.data.token)
                setToken(resp.data.token)
                setUser(resp.data.returnUser)
                setInput(prv => ({ inputUser: "", inputPass: "", inputNewUser: "", inputNewEmail: "", inputNewPass: "", inputNewPassConfirm: "" }))
                setCtrlShowLogin({ visibility: 'invisible', opcity: 0 })
            }
        } catch (err) {
            setErrMessage("Invalid user or password!")
            setLoginErr(true)
            console.log(err.message)
        }
    }
    const hdlShowRegister = e => {
        e.stopPropagation()
        setLoginErr(false)
        setShowRegister(true)
    }
    const hdlRegister = async (e) => {
        e.preventDefault()
        //validate
        console.log(input)
        if (input.inputNewPass !== input.inputNewPassConfirm) {
            setErrMessage("Password not match!")
            setRegisErr(true)
            return
        }
        setRegisErr(false)
        //register
        try {
            const resp = await axios.post("http://localhost:8000/auth/register", {
                name: input.inputNewUser,
                password: input.inputNewPass,
                email: input.inputNewEmail
            })
            setInput(prv => ({ inputUser: resp.data.newUser.userName, inputPass: "", inputNewUser: "", inputNewEmail: "", inputNewPass: "", inputNewPassConfirm: "" }))
            setShowRegister(false)
        } catch (err) {
            setErrMessage(err.response.data.message)
            setRegisErr(true)
        }
    }

    useEffect(() => {
        setInput(prv => ({ inputUser: "", inputPass: "", inputNewUser: "", inputNewEmail: "", inputNewPass: "", inputNewPassConfirm: "" }))
        setLoginErr(false)
        setRegisErr(false)
    }, [])
    return (
        <div className={`bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 transition-all duration-500 ${visibility === 'visible' ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10`}
            onClick={e => {
                e.stopPropagation()
                setCtrlShowLogin({ visibility: 'invisible', opcity: 0 })
                setInput(prv => ({ inputUser: "", inputPass: "", inputNewUser: "", inputNewEmail: "", inputNewPass: "", inputNewPassConfirm: "" }))
                setLoginErr(false)
                setRegisErr(false)
                setShowRegister(false)
            }}>
            {/* card */}

            <div className="w-4/12 min-h-[400px] bg-my-bg-card fixed left-1/2 top-1/2 -translate-y-2/3 -translate-x-1/2 flex flex-col py-10 px-32"
                onClick={e => {
                    e.stopPropagation()
                }}>
                <div className='flex items-baseline gap-2 text-my-prim justify-center mb-5'>
                    <RiSwap2Line className='text-[50px]' />
                    <p className='text-xl font-bold font-serif mr-2 -translate-y-2'>Swapy Marketplace</p>
                </div>
                {/* login box */}
                {!showRegister &&
                    <div className="w-full min-h-[400px] text-my-prim text-xl flex flex-col gap-8">
                        <form className="flex flex-col gap-2"
                            onSubmit={hdlLogin}>
                            <p className="font-bold">Username :</p>
                            <input type="text" className="border h-[37px] w-full px-2"
                                name="inputUser"
                                value={input.inputUser}
                                onChange={hdlInput} />
                            <p className="font-bold">Password :</p>
                            <input type="text" className="border  h-[37px] w-full px-2"
                                name="inputPass"
                                value={input.inputPass}
                                onChange={hdlInput} />
                            {/* error msg */}
                            {loginErr && <p className="text-sm text-center font-bold text-red-600">{errMessage}</p>}
                            <button className="mt-4 h-[40px] w-[200px] bg-my-acct text-my-text self-center font-bold hover:bg-my-btn-hover">Login</button>
                        </form>
                        <button className="h-[40px] w-[200px] border text-my-prim self-center font-bold hover:bg-my-hover border-my-acct"
                            onClick={hdlShowRegister}>Register</button>
                        <div className="w-full bg-slate-300 h-[2px]"></div>
                        <div className="h-[40px] w-[250px]  text-my-prim self-center font-bold hover:bg-my-hover flex justify-center items-center gap-2 cursor-pointer border">
                            <FcGoogle />
                            <p>Sign in with Google</p>
                        </div>

                    </div>}
                {/* register box */}
                {showRegister &&
                    <div className="w-full min-h-[400px] text-my-prim text-xl flex flex-col gap-8">
                        <form className="flex flex-col gap-2"
                            onSubmit={hdlRegister}>
                            <p className="font-bold">Username :</p>
                            <input type="text" className="border h-[37px] w-full px-2"
                                name="inputNewUser"
                                value={input.inputNewUser}
                                onChange={hdlInput} />
                            <p className="font-bold">Email :</p>
                            <input type="text" className="border  h-[37px] w-full px-2"
                                name="inputNewEmail"
                                value={input.inputNewEmail}
                                onChange={hdlInput} />
                            <p className="font-bold">Password :</p>
                            <input type="text" className="border  h-[37px] w-full px-2"
                                name="inputNewPass"
                                value={input.inputNewPass}
                                onChange={hdlInput} />
                            <p className="font-bold">Confirm Password :</p>
                            <input type="text" className="border  h-[37px] w-full px-2"
                                name="inputNewPassConfirm"
                                value={input.inputNewPassConfirm}
                                onChange={hdlInput} />
                            {/* error msg */}
                            {RegisErr && <p className="text-sm text-center font-bold text-red-600">{errMessage}</p>}
                            <button className="mt-4 h-[40px] w-[200px] bg-my-acct text-my-text self-center font-bold hover:bg-my-btn-hover">Register</button>
                        </form>
                    </div>}
                {/* close button */}
                <button className='w-[50px] h-[50px] bg-my-acct text-my-text rounded-full text-4xl font-bold absolute flex justify-center items-center top-0 right-0 translate-x-4 -translate-y-4 shadow-md hover:bg-my-btn-hover'
                    onClick={e => {
                        e.stopPropagation()
                        setCtrlShowLogin({ visibility: 'invisible', opcity: 0 })
                        setInput(prv => ({ inputUser: "", inputPass: "", inputNewUser: "", inputNewEmail: "", inputNewPass: "", inputNewPassConfirm: "" }))
                        setLoginErr(false)
                        setRegisErr(false)
                        setShowRegister(false)
                    }
                    }><IoIosClose /></button>

                {/* for test only */}
                {/* <div onClick={() => console.log(user)} className="text-my-prim cursor-pointer">Show User</div> */}

            </div>
        </div>
    )
}
