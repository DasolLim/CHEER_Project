import React from 'react';

const Navbar = () => {
    return(
        <div>
            <div className='bg-[#FFF] w-full align-center'>
                <div>
                    <div className='w-[235px]'>
                        <p className='text-[#DB7859] text-[32px] font-extrabold'>OLLI NETWORK</p>
                    </div>
                    <ul className='list-none flex justify-end py-8 px-20'>
                        <li className='inline'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-6' href="#">Home</a>
                        </li>
                        <li className='inline'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-8' href="#">About</a>
                        </li>
                        <li className='inline'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-8' href="#">Services</a>
                        </li>
                        <li className='inline'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-8' href="#">Contact</a>
                        </li>
                        <li className='inline'>
                            <a className='inline-block text-[#647249] text-[24px] font-extrabold px-8' href="#">REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;