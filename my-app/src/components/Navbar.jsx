import React from 'react';
import OLLI from '../Assets/OLLI LOGO.png';

const Navbar = () => {
    return(
        <div>
            <div className='bg-[#FFF] w-full align-center'>
                <div>
                    <ul className='list-none flex justify-end py-[-1%] px-20'>
                        <li className='flex'>
                            <img className='scale-[25%] mx-[-35%] my-[-30%]' src={OLLI}></img>
                            <p className='text-[#DB7859] text-[24px] font-extrabold my-auto w-[100px]'>OLLI NETWORK</p>
                        </li>
                        <li className='inline my-auto'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-6' href="/">Home</a>
                        </li>
                        <li className='inline my-auto'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-8' href="#">Services</a>
                        </li>
                        <li className='inline my-auto'>
                            <a className='inline-block text-[#3A3A3A] text-[24px] font-extrabold px-8' href="newsletter">Newsletters</a>
                        </li>
                        <li className='inline my-auto'>
                            <a className='inline-block text-[#647249] text-[24px] font-extrabold px-8' href="login">LOGIN</a>
                        </li>
                        <li className='inline my-auto'>
                            <a className='inline-block text-[#647249] text-[24px] font-extrabold px-8' href="register">REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;