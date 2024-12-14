"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image"
import { Wallet } from 'lucide-react'
import Nav from './Nav'
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  function hanldeAuth(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push("/home")
  }
  return (
    <>
    <Nav/>
    <section className='w-[90%] m-auto md:m-none md:w-full min-h-screen flex justify-center items-center'>
        <form  onSubmit={hanldeAuth}action="" className='space-y-8 w-[500px] h-[311px]'>
            <h1 className='text-[28px] text-center'>Setup your account</h1>
            <Button className='hover:text-black rounded-[8px] p-[15px] w-full h-[40px] bg-[#313131] flex jusitfy-start items-center text-white gap-x-[8px]'>
                <span className='w-[16px] h-[16px]'><Image src="/images/spotify2.png" alt="spotify" width={100} height={100}></Image></span>
                Sign in with Spotify
            </Button>
            <div className="flex items-center justify-between">
                 <hr className="w-full border-t border-[#313131]" />
                    <p className="px-2 text-[11px] text-[#FFFFFF]">OR</p>
                <hr className="w-full border-t border-[#313131]" />
            </div>
            {/* <p>or</p> */}
              <div className='border flex justify-center text-[#313131] cursor-not-allowed rounded-[8px] p-[15px] w-full h-[40px] bg-transperent hover:bg-transperent flex jusitfy-start items-center gap-x-[8px]'>
                <span className='w-[16px] h-[16px]'><Wallet size={15} /></span>
                Sign in with your wallet
            </div>
        </form>
    </section>
    </>

  )
}
