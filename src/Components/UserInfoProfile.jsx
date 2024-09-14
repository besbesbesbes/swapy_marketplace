import { IoIosSave } from "react-icons/io";


const UserInfoProfile = () => {

    return (
        <div>
            <div className='w-5/12 h-[150px]  mx-auto flex gap-4'>
                {/* profile pic */}
                <div className='w-[150px] h-full flex justify-center relative'>
                    <img className=' object-contain h-full shadow-xl' src="/src/pics/user.png" alt="no load" />
                    <p className='absolute bottom-0 text-slate-500 translate-y-4 text-[.6rem]'>CLICK TO UPLOAD</p>
                </div>
                {/* user info */}
                <div className='flex-1 h-full  flex flex-col justify-between'>
                    <div>
                        <div className='w-full flex  gap-2'>
                            <p className='w-4/12 font-bold'>Username :</p>
                            <p className='flex-1'>Johnycase123</p>
                        </div>
                        <div className='w-full flex  gap-2'>
                            <p className='w-4/12 font-bold'>Display Name :</p>
                            <p className='flex-1'>Joh*23</p>
                        </div>
                    </div>
                    {/* user rating */}
                    <div className='w-full flex  gap-2 items-baseline'>
                        <p className='w-4/12 font-bold'>User Rating :</p>
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
            <form>
                {/* bio */}
                <div className='w-5/12 h-[150px] mx-auto  flex flex-col py-2 mt-3'>
                    <p className='font-bold'>Bio :</p>
                    <textarea className='h-full resize-none border p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore asperiores praesentium ducimus accusamus sapiente, minima laborum doloremque totam quam consectetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio velit vel perferendis vero
                    </textarea>
                </div>
                {/* shippping location */}
                <div className='w-5/12 h-[50px] mx-auto  flex py-2 mt-3 items-center gap-2'>
                    <p className='font-bold w-5/12'>Shipping Location :</p>
                    <input className='h-full resize-none border p-2 w-full'
                        value="Bangkok, Thailand" />
                </div>
                {/* shipping address */}
                <div className='w-5/12 h-[150px] mx-auto  flex flex-col py-2 mt-3'>
                    <p className='font-bold'>Shipping Address :</p>
                    <textarea className='h-full resize-none border p-2'>Johny Case,
                        1/23 Klongsarn Krungthonburi, Bangrak, Bangkok, 123456 "Please call after delivery"
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