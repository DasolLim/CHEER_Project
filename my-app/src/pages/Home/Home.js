import React from 'react';
import OLLI from '../../Assets/OLLI LOGO.png';
import CHEER from '../../Assets/cheerconnections.png';

function Home() {
    // const location = useLocation()

    // const buttonStyles = {
    //     fontSize: 20,
    //     fontWeight: 700,
    //     backgroundColor: '#FFA500',
    //     '&:hover': {
    //         backgroundColor: 'red',
    //     },
    // }
    return (
        <div className='grid grid-cols-2 items-center justify-center text-center'>
            <div className='items-center my-auto'>
                <div className="flex m-auto justify-between flex-col w-[75%]">
                    <p className='w-inherit text-[#DB7859] text-[60px] font-semibold'>Welcome to the OLLI NETWORK</p>
                    <a href='info'>
                        <button className='text-white font-semibold w-full inline-flex my-4 justify-center py-[10px] px-[82px] rounded-md shadow-md bg-[#498184]
                        hover:scale-[102.5%] ease-in duration-75 hover:bg-[#6daeb1]'>Program and Events</button>
                    </a>
                    <a href='calendar'>
                        <button className='text-white font-semibold w-full inline-flex my-4 justify-center py-[10px] px-[82px] rounded-md shadow-md bg-[#EE807E]
                        hover:scale-[102.5%] ease-in duration-75 hover:bg-[#ea8f8d]'>Calendar</button>
                    </a>
                    <a href='calendar'>
                        <button className='text-white font-semibold w-full inline-flex my-4 justify-center py-[10px] px-[82px] rounded-md shadow-md bg-[#8D617C]
                        hover:scale-[102.5%] ease-in duration-75 hover:bg-[#8d6a7f]'>Login</button>
                    </a>
                </div>
            </div>
            <div className='m-auto p-auto'>
                <br></br><br></br>
                <div id='row1' className='italic my-auto'>
                    <p>Vision Statement—
                        To be a community of inclusion and
                        a circle of friendship that supports
                        and enhances the lives of our loved
                        ones with intellectual disabilities as
                        well as the whole family.
                    </p>
                </div>
                <div id='row2' className='flex items-center justify-end m-6 px-12'>
                    <img src={OLLI} className='w-[25%] mx-12'></img>
                    <p>OLLI is a registered not-for-profit
                        caregiver driven company with
                        four areas of focus: Cheer Group;
                        Cheer Works; Cheer Connections;
                        and, Cheer Living.
                    </p>
                </div>
                <div id='row3' className='flex items-center justify-start m-6 px-12'>
                    <p>Caregiver social and support
                        group, creators and administrators
                        of all things C.H.E.E.R.
                    </p>
                    <img src={CHEER} className='w-[35%] mx12'></img>
                </div>
            </div>
        </div>
    )
}

export default Home;