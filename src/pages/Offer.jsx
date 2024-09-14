import React from 'react'
import OfferList from '../Components/OfferList'
import OfferDetail from '../Components/OfferDetail'
import OfferMessage from '../Components/OfferMessage'

export default function Offer() {
    return (
        <div className='w-full min-h-[600px] bg-my-bg-main pt-10 flex px-5 items-start gap-5 justify-center'>
            <OfferList />
            <div className='flex flex-col gap-5 w-9/12'>
                <OfferDetail />
                <OfferMessage />
            </div>
        </div>
    )
}
