import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { RiSwap2Line } from "react-icons/ri"
import { FaSearch, FaUser, FaBoxOpen } from "react-icons/fa"
import { MdLocalShipping, MdLocalOffer } from "react-icons/md"
import { BiSolidLogInCircle } from "react-icons/bi"
import { FaPhone } from "react-icons/fa";
import ShowLogin from './ShowLogin'
import ShowContactUs from './ShowContactUs'
const Header = () => {
    const location = useLocation()
    const [ctrlShowLogin, setCtrlShowLogin] = useState({ visibility: "invisible", opacity: 0 })
    const [ctrlShowContactUs, setCtrlShowContactUs] = useState({ visibility: "invisible", opacity: 0 })
    const hdlShowLogin = () => {
        setCtrlShowLogin({ visibility: 'visible', opacity: 100 })
    }
    const hdlShowContactUs = () => {
        setCtrlShowContactUs({ visibility: 'visible', opacity: 100 })
    }
    return (
        <div className='w-full text-my-text font-extralight'>
            <div className=' h-[100px] pt-2 px-3 flex flex-col justify-between bg-my-prim bg-header-pattern'>
                <div className='flex justify-between'>
                    {/* swapy logo */}
                    <Link to='/'>
                        <div className='flex items-end gap-2 mt-3 cursor-pointer'>
                            <div className='flex justify-center items-center -translate-y-1'>
                                <p className=' w-[35px] h-[35px] text-center text-xl font-bold rounded-full p-1 text-my-text bg-my-acct flex justify-center items-center' to='/'><RiSwap2Line className='text-white text-2xl' /></p>
                            </div>
                            <p className='text-lg font-bold font-serif mr-2'>Swapy</p>
                            <p className='text-xs mb-1'> | Swap, Save, Share - The P2P Marketplace for Everyone...</p>
                        </div>
                    </Link>
                    {/* menu login contact */}
                    <div className='flex justify-end gap-1 text-my-text'>
                        <button className='px-2 flex gap-1'
                            onClick={() => hdlShowContactUs()}><FaPhone />Contact us</button>
                        <button className='px-2 flex gap-1'
                            onClick={() => hdlShowLogin()}
                        ><BiSolidLogInCircle />Login</button>
                    </div>
                </div>
                <div className='flex justify-between items-end gap-20'>
                    {/* search input */}
                    <div className='flex border border-my-text p-1 flex-1 bg-my-text  max-w-[600px] mb-2'>
                        <input type="text" className='flex-1 text-my-prim px-2 bg-my-text' />
                        <button className='py-1 px-2 bg-my-acct flex justify-center items-center gap-1 hover:bg-my-btn-hover'> <FaSearch />Search</button>
                    </div>
                    {/* main menu */}
                    <div className='flex gap-2 flex-wrap'>
                        <button className={`py-1 px-2 ${location.pathname == '/offer' ? 'bg-my-acct' : ''}`}><Link to='/offer' className='flex gap-1 items-baseline'><MdLocalOffer />Offer</Link></button>
                        <button className={`py-1 px-2 ${location.pathname == '/shipping' ? 'bg-my-acct' : ''}`}><Link to='/shipping' className='flex gap-1 items-baseline'><MdLocalShipping />Shipping</Link></button>
                        <button className={`py-1 px-2 ${location.pathname == '/assets' ? 'bg-my-acct' : ''}`}><Link to='/assets' className='flex gap-1 items-baseline'><FaBoxOpen />Assets</Link></button>
                        <button className={`py-1 px-2 ${location.pathname == '/userinfo' ? 'bg-my-acct' : ''}`}><Link to='/userinfo' className='flex gap-1 items-baseline'><FaUser />User Info</Link></button>
                    </div>
                </div>
            </div>
            {/* underline menu */}
            <div className='h-[3px] bg-my-acct'></div>
            {/* show asset */}
            <ShowLogin ctrlShowLogin={ctrlShowLogin} setCtrlShowLogin={setCtrlShowLogin} />
            {/* show contact us */}
            <ShowContactUs ctrlShowContactUs={ctrlShowContactUs} setCtrlShowContactUs={setCtrlShowContactUs} />
        </div>
    )
}
export default Header