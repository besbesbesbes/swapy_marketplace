import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { MdLocalOffer } from "react-icons/md"

export default function ShowAsset({ ctrlShowAsset, setCtrlShowAsset, selectedAsset, setSelectedAsset }) {
    // console.log(selectedAsset)
    const [selectedPic, setSelectedPic] = useState(0)
    const { visibility, opacity } = ctrlShowAsset;
    const hdlClosePopup = e => {
        e.stopPropagation()
        setCtrlShowAsset({ visibility: 'invisible', opcity: 0 })
        setSelectedAsset({})
        setSelectedPic(0)
    }
    return (
        <div className={`bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 transition-all duration-500 ${visibility === 'visible' ? 'opacity-100' : 'opacity-0 pointer-events-none'} z-10`}
            onClick={hdlClosePopup}>
            {/* card */}
            <div className="w-6/12 min-h-[500px] bg-my-bg-card fixed left-1/2 top-1/2 -translate-y-2/3 -translate-x-1/2 flex flex-col p-10"
                onClick={e => { e.stopPropagation() }}>
                <div className="flex w-full h-[400px]">
                    {/* picture */}
                    <div className="w-6/12 h-full flex flex-col p-5">
                        {/* big picture */}
                        <div className="w-full h-5/6 p-5 border">
                            <img src={selectedAsset?.images?.[selectedPic]} alt="no load" className="w-full max-h-[220px] object-contain" />
                        </div>
                        {/* list pic */}
                        <div className="w-full h-1/6 py-2 flex gap-2">
                            {selectedAsset?.images?.map((el, idx) => (
                                <img key={idx} src={el} alt="no load" className={`w-[50px] h-[50px] object-contain border cursor-pointer hover:bg-my-hover ${selectedPic == idx ? 'border-my-acct border-2' : ''}`}
                                    onClick={e => {
                                        e.stopPropagation()
                                        setSelectedPic(idx)
                                    }} />
                            ))}
                        </div>
                    </div>
                    {/* detail */}
                    <div className="w-6/12 h-full p-5 flex flex-col justify-between gap-4">
                        {/* user */}
                        <div className="w-full h-[100px]  flex justify-between">
                            {/* profile pic */}
                            <div className="w-4/12 rounded-full ">
                                <img className='w-full h-full object-contain' src="/src/pics/user.png" alt="no load" />
                            </div>
                            {/* profile detail */}
                            <div className=" flex-1 p-1 flex flex-col justify-around">
                                <div className=" flex">
                                    <p className="w-5/12 font-bold">Swaper :</p>
                                    <p className="flex-1">Joh***e</p>
                                </div>
                                <div className=" flex">
                                    <p className="w-5/12 font-bold">Ship from :</p>
                                    <p className="flex-1">Bangkok, Thailand</p>
                                </div>
                                <div className=" flex items-center flex-wrap">
                                    <p className="w-5/12 font-bold">Rating :</p>
                                    <div className='flex gap-1 items-baseline'>
                                        <div className='w-[10px] h-[10px] rounded-full bg-my-acct'></div>
                                        <div className='w-[10px] h-[10px] rounded-full bg-my-acct'></div>
                                        <div className='w-[10px] h-[10px] rounded-full bg-my-acct'></div>
                                        <div className='w-[10px] h-[10px] rounded-full bg-my-acct'></div>
                                        <p className='text-xs'>{`(4.2 / 5)`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* asset detail */}
                        <div className=" w-full h-[400px] p-2 flex flex-col gap-4">
                            <div className=" flex">
                                <p className="min-w-3/12 font-bold">Asset :</p>
                                <p className="flex-1">{selectedAsset.title}</p>
                            </div>
                            <div className=" flex">
                                <p className="min-w-3/12 font-bold">Category :</p>
                                <p className="flex-1">{selectedAsset.category}</p>
                            </div>
                            <div className=" flex">
                                <p className="min-w-3/12 font-bold">Condition :</p>
                                <p className="flex-1">Mint</p>
                            </div>
                            <div className=" flex">
                                <p className="min-w-3/12 font-bold">Note :</p>
                                <p className="flex-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, ducimus?</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* button */}
                <div className="flex justify-center items-center mt-2">
                    <button className='h-[40px] py-1 w-[200px] mx-auto shadow-md bg-my-acct font-bold text-my-text flex justify-center items-center gap-1 hover:bg-my-btn-hover'><MdLocalOffer className="-translate-y-[1px]" />Make New Offer</button>
                </div>
                {/* close button */}
                <button className='w-[50px] h-[50px] bg-my-acct text-my-text rounded-full text-4xl font-bold absolute flex justify-center items-center top-0 right-0 translate-x-4 -translate-y-4 shadow-md hover:bg-my-btn-hover'
                    onClick={hdlClosePopup}><IoIosClose /></button>
            </div>
        </div>
    )
}
