import React from 'react';
import I4GLogo from '../assets/I4G.png';
import ZuriLogo from '../assets/Zuri.png';

export const Footer = () => {
    return(
        <footer className="flex justify-around pb-[38px]">
          <div>
          <img src={ZuriLogo} alt="zuri logo"/>
          </div>
          <div>
            <p className="text-center text-gray-500">HNG Internship 9 Frontend Task</p>
          </div>
          <div>
          <img src={I4GLogo} alt="ngressive logo"/>
          </div>
        </footer>
    )
}