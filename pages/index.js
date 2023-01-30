import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HomeLayout from '@/components/home'

const inter = Inter({ subsets: ['latin'] })

const Index = () => {
  return (
    <>
    <HomeLayout />
    </>
  )
}

export default Index;
