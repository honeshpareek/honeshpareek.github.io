
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillBehanceCircle } from 'react-icons/ai';
import Image from 'next/image';
import honeshportfolio from 'public/business-3d-young-man-standing-with-laptop.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-white text-black px-10'>
      <section className=' min-h-screen'>
      <nav className=' flex justify-between py-2 px-1 mb-3'>
        <h1 className=' text-2xl '>Honesh Rai Pareek</h1>
        <ul className=' flex items-center justify-evenly'>
          <li className='m-2'>
            <BsFillMoonStarsFill className='text-xl cursor-pointer' />
          </li>
          <li className='m-2'>
            <a className=' text-white bg-gradient-to-br px-4 py-2 from-cyan-500 to-cyan-700 rounded-md ' href="#">Resume</a>
          </li>
        </ul>
      </nav>

      <div className='text-center p-10 '>
        <h2 className=' text-5xl py-2 text-cyan-600 font-semibold'>Honesh Rai Pareek</h2>
        <h3 className='text-2xl py-2'>Designer & Developer</h3>
        <p className=' py-5 text-md '>I create websites and apps.</p>
      </div>

      <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-500'>
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillBehanceCircle />

      </div>

      <div className=' px-auto relative '>
        <Image className='' src={honeshportfolio} alt='Hello'  />
      </div>
      </section>
    </main> 
  )

}
