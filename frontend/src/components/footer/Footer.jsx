import React from 'react'
import "./Footer.css"
import { AiFillFacebook } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { BsArrowRightShort } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <p className="contact">
          Contact me
          <ul>
            <li>
              <CiLocationOn/>
              Back Khoa University
            </li>
            <li>
              <AiOutlineMail/>
              trongngo08082002@gmail.com
            </li>
            <li>
              <AiOutlinePhone/>
              0362928053
            </li>
          </ul>
        </p>
        <p className="shop-info">
          EcomRey
          <ul>
            <li>
              <BsArrowRightShort/>
              Supply model products
            </li>
            <li>
              <BsArrowRightShort/>
              Supply model arc pen
            </li>
            <li>
              <BsArrowRightShort/>
              Supply a cute pig :3
            </li>
          </ul>
        </p>
        <p className="best-product">
          Best Product
          <ul>
            <li>
              <BsArrowRightShort/>
              Diy beauty model
            </li>
            <li>
              <BsArrowRightShort/>
              Painting
            </li>
            <li>
              <BsArrowRightShort/>
              Watch
            </li>
          </ul>
        </p>
      </div>
      <div className="contact-info">
          <a href="https://www.facebook.com/trong.ngo.33633344" rel="noopener noreferrer" target="_blank"><AiFillFacebook/></a>
          <a href="#header"><AiOutlineTwitter/></a>
          <a href="#header"><AiFillLinkedin/></a>
          <a href="https://github.com/NgoTTrong" rel="noopener noreferrer" target="_blank"><AiFillGithub/></a>
      </div>
    </div>
  )
}

export default Footer
