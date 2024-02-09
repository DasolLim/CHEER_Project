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
        <>
        <div className='grid grid-rows-4 gap-y-0.1 max-w-[800px] justify-center flex-col text-center items-center mx-auto'>
            <div class="button-container">
                <button id="btn1">Button 1</button>
                <button id="btn2">Button 2</button>
                <button id="btn3">Button 3</button>
            </div>

            <div id='row1' className='italic p-[-5]'>
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
        </>
    )
}

export default Home;