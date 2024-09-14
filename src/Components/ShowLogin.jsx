import { IoIosClose } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";

export default function ShowLogin({ ctrlShowLogin, setCtrlShowLogin }) {
    // console.log(selectedAsset)
    const { visibility, opacity } = ctrlShowLogin;
    return (
        <div className={`bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 transition-all duration-500 ${visibility === 'visible' ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10`}
            onClick={e => {
                e.stopPropagation()
                setCtrlShowLogin({ visibility: 'invisible', opcity: 0 })
            }}>
            {/* card */}
            <div className="w-4/12 min-h-[400px] bg-my-bg-card fixed left-1/2 top-1/2 -translate-y-2/3 -translate-x-1/2 flex flex-col py-10 px-32"
                onClick={e => {
                    e.stopPropagation()
                }}>
                {/* login box */}
                <div className="w-full min-h-[400px] text-my-prim text-xl flex flex-col gap-8">
                    <form className="flex flex-col gap-4">
                        <p className="font-bold">Username :</p>
                        <input type="text" className="border h-[37px] w-full px-2" />
                        <p className="font-bold">Password :</p>
                        <input type="text" className="border  h-[37px] w-full px-2" />
                        <button className="h-[40px] w-[200px] bg-my-acct text-my-text self-center font-bold hover:bg-my-btn-hover ">Login</button>
                        <button className="h-[40px] w-[200px] border text-my-prim self-center font-bold hover:bg-my-hover border-my-acct">Register</button>
                    </form>
                    <div className="w-full bg-slate-300 h-[2px]"></div>
                    <div className="h-[40px] w-[250px]  text-my-prim self-center font-bold hover:bg-my-hover flex justify-center items-center gap-2 cursor-pointer border">
                        <FcGoogle />
                        <p>Sign in with Google</p>
                    </div>

                </div>
                {/* close button */}
                <button className='w-[50px] h-[50px] bg-my-acct text-my-text rounded-full text-4xl font-bold absolute flex justify-center items-center top-0 right-0 translate-x-4 -translate-y-4 shadow-md hover:bg-my-btn-hover'
                    onClick={e => {
                        e.stopPropagation()
                        setCtrlShowLogin({ visibility: 'invisible', opcity: 0 })
                    }
                    }><IoIosClose /></button>
            </div>
        </div>
    )
}
