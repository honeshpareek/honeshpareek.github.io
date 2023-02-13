
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=' bg-slate-400 px-10'>
      <section className=' min-h-screen'>
      <nav className=' flex justify-between py-2 px-1 mb-3'>
        <h1>Honesh Rai Pareek</h1>
        <ul className=' flex items-center'>
          <li>
            <BsFillMoonStarsFill />
          </li>
          <li><a href="#">Resume</a></li>
        </ul>
      </nav>
      </section>
    </main> 
  )
}
