import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-slate-900 p-10 rounded-t-2xl '>
      <div className=' flex justify-center'>

        <div>
          <div className=' flex justify-center gap-8 text-slate-500 text-5xl'>
            <FaFacebook />
            <BsWhatsapp />
            <FaYoutube />
            <FaTelegram />

          </div>

          <h3 className=' flex justify-center w-full font-anton text-3xl m-auto text-slate-600 mt-10'>
            <span className=' mx-3'>
              <FaFileCode />
            </span>
            Developed By Kerlos Hany</h3>


        </div>

      </div>
    </div>
  )
}

export default Footer