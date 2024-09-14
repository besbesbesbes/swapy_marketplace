import { IoIosClose } from "react-icons/io";

export default function ShowContactUs({ ctrlShowContactUs, setCtrlShowContactUs }) {
    const { visibility, opacity } = ctrlShowContactUs;
    return (
        <div className={`bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 transition-all duration-500 ${visibility === 'visible' ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10`}
            onClick={e => {
                e.stopPropagation()
                setCtrlShowContactUs({ visibility: 'invisible', opcity: 0 })
            }}>
            {/* card */}
            <div className="w-4/12 min-h-[400px] bg-my-bg-card fixed left-1/2 top-1/2 -translate-y-2/3 -translate-x-1/2 flex flex-col p-10"
                onClick={e => {
                    e.stopPropagation()
                }}>
                {/* qr */}
                <img src="./src/pics/contact-us-qr.png" alt="no load" />
                {/* link */}
                <a href='https://www.google.com' target='_blank' rel='noopener noreferrer' className='text-my-prim font-bold text-center text-xl'>
                    Click
                </a>
                {/* close button */}
                <button className='w-[50px] h-[50px] bg-my-acct text-my-text rounded-full text-4xl font-bold absolute flex justify-center items-center top-0 right-0 translate-x-4 -translate-y-4 shadow-md hover:bg-my-btn-hover'
                    onClick={e => {
                        e.stopPropagation()
                        setCtrlShowContactUs({ visibility: 'invisible', opcity: 0 })
                    }
                    }><IoIosClose /></button>
            </div>
        </div>
    )
}
