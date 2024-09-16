import React, { useState } from 'react'
// import { data_dummy } from '../data/testData'
import { data_assets } from "../data/data_assets.js"
import ShowAsset from './ShowAsset'
// const assets = data_dummy.assets
const HomeAssets = () => {
    const [ctrlShowAsset, setCtrlShowAsset] = useState({ visibility: "invisible", opacity: 0 })
    const [selectedAsset, setSelectedAsset] = useState({})
    const hdlShowAssets = (el) => {
        setSelectedAsset(el)
        setCtrlShowAsset({ visibility: 'visible', opacity: 100 })
    }
    console.log(data_assets)
    return (
        <div>
            <div className='w-full bg-my-bg-main flex justify-evenly items-center p-4 flex-wrap gap-4 i'>
                {/* create your asset */}
                {/* <div className='w-[170px] h-[220px] shadow-md flex flex-col items-center gap-2 overflow-hidden hover:bg-my-hover  cursor-pointer'>
                    <div className='w-full h-full p-4 bg-my-hover'>
                        <div className=' w-full h-full border inset-0 bg-my-bg-card flex justify-center items-center flex-col gap-2'>
                            <p className='w-[50px] h-[50px] flex justify-center items-center text-3xl bg-my-acct p-3 rounded-full font-bold text-my-text'>+</p>
                            <p className='font-bold text-xs'>Create Your Asset</p>
                        </div>
                    </div>
                </div> */}
                {/* asset list area */}
                {data_assets.map((el, idx) => {
                    if (el.asset_id > 3 && el.asset_id < 50) {
                        return (
                            <div key={idx} className='bg-my-bg-card w-[170px] h-[220px] shadow-md flex flex-col items-center gap-2 overflow-hidden p-2 hover:bg-my-hover  cursor-pointer relative'
                                onClick={e => { hdlShowAssets(el) }}>
                                {/* asset pic */}
                                <div className='h-[150px]'>
                                    <img className='h-[150px]' src={el.pic[0]} alt="no load" />
                                </div>
                                {/* asset name */}
                                <div className='w-full h-[20px]'>
                                    <p className='overflow-hidden whitespace-nowrap text-ellipsis font-bold'>{el.asset_name}</p>
                                </div>
                                {/* offer */}
                                <div className='w-full flex justify-between text-xs items-baseline'>
                                    <p>Bangkok</p>
                                    <div className=' h-[20px] flex justify-center items-center gap-1 px-2 rounded-full bg-my-acct text-white'>
                                        <p>Offer :</p>
                                        <p className='font-bold'>99</p>
                                    </div>
                                </div>
                                {/* new badge */}
                                {el.asset_id % 5 == 0 &&
                                    <div className='w-[100px] h-[40px] text-center pt-4 absolute left-0 top-0 bg-my-prim text-my-text -rotate-45 -translate-x-10 -translate-y-2'>
                                        <p className='text-xs font-bold translate-y-1'>NEW</p>
                                    </div>}
                            </div>
                        )
                    }
                })}
            </div>
            {/* show asset */}
            <ShowAsset ctrlShowAsset={ctrlShowAsset} setCtrlShowAsset={setCtrlShowAsset} selectedAsset={selectedAsset} setSelectedAsset={setSelectedAsset} />
        </div >
    )
}

export default HomeAssets