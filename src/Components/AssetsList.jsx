import { IoIosAddCircle } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { data_dummy } from '../data/testData'
import ShowAsset from "./ShowAsset";
import { useState } from "react";
const assets = data_dummy.assets

const AssetsList = () => {
    const [ctrlShowAsset, setCtrlShowAsset] = useState({ visibility: "invisible", opacity: 0 })
    const [selectedAsset, setSelectedAsset] = useState({})
    const hdlShowAssets = (el) => {
        setSelectedAsset(el)
        setCtrlShowAsset({ visibility: 'visible', opacity: 100 })
    }

    return (
        <div>
            {/* create new asset button */}
            <div className='w-full flex justify-center'>
                <button className='h-[40px] py-1 w-[200px] mx-auto shadow-md bg-my-acct font-bold text-my-text flex justify-center items-center gap-1 hover:bg-my-btn-hover'><IoIosAddCircle className="text-xl" />Create New Asset</button>
            </div>
            <div className='w-8/12 mx-auto p-2 mt-2 flex flex-col gap-4 bg-my-bg-card'>
                {assets.map((el, idx) => {
                    if (el.id <= 8) {
                        return (
                            // asset list area
                            <div key={idx} className='w-full h-auto shadow-md flex gap-4 p-2 hover:bg-my-hover cursor-pointer'
                                onClick={() => hdlShowAssets(el)}>
                                <div className='w-[100px] '>
                                    {/* asset pic */}
                                    <img className='w-[100px] h-[100px] object-contain' src={el.images[0]} alt="" />
                                </div>
                                {/* asset info */}
                                <div className='flex-1  flex flex-col justify-between overflow-hidden '>
                                    <div className='flex w-full gap-1'>
                                        <p className='w-[100px] font-bold'>Asset Name :</p>
                                        <p className='flex-1 text-ellipsis overflow-hidden whitespace-nowrap'>{el.title}</p>
                                    </div>
                                    <div className='flex w-full gap-1'>
                                        <p className='w-[100px] font-bold'>Category :</p>
                                        <p className='flex-1'>{el.category}</p>
                                    </div>
                                    <div className='flex w-full gap-1'>
                                        <p className='w-[100px] font-bold'>Brand :</p>
                                        <p className='flex-1'>{el.brand}</p>
                                    </div>
                                    <div className='flex w-full gap-1'>
                                        <p className='w-[100px] font-bold'>Condition :</p>
                                        <p className='flex-1'>Used</p>
                                    </div>

                                </div>
                                {/* asset note */}
                                <div className='flex-1  flex flex-col'>
                                    <p className='font-bold'>Note :</p>
                                    <div className=' p-1 h-[70px] overflow-hidden'>
                                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit non dolorum odio, eaque explicabo. Facere maxime quaerat sint alias ullam iusto incidunt, commodi, rerum quam impedit repellat ut veritatis!</p>
                                    </div>
                                </div>
                                {/* button asset */}
                                <div className='w-[150px]  flex flex-col justify-evenly items-center'>
                                    <div><p className='font-bold'>Ready</p></div>
                                    <button className='py-1 px-2 bg-my-acct text-my-text w-full font-bold flex justify-center items-center gap-1 hover:bg-my-btn-hover'><AiFillEdit />Edit</button>
                                    <button className='py-1 px-2 bg-my-acct text-my-text w-full font-bold flex justify-center items-center gap-1 hover:bg-my-btn-hover'><RiDeleteBin5Fill />Delete</button>
                                </div>

                            </div>
                        )
                    }
                })}
            </div>
            {/* show asset */}
            <ShowAsset ctrlShowAsset={ctrlShowAsset} setCtrlShowAsset={setCtrlShowAsset} selectedAsset={selectedAsset} setSelectedAsset={setSelectedAsset} />
        </div>
    )
}

export default AssetsList