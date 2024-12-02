'use client'
import LoginForm from '@/components/loginForm'
import SignupForm from '@/components/SignupForm'
import { Button } from '@/components/ui/button'
import { useState } from 'react'



export default function User() {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
            <div className='min-h-screen flex flex-col justify-center text-center content-center bg-gray-50'>
                <div className='mb-4'>
                    <button className='text-lg text-center bg-blue-400 p-5 mt-[70px] text-white text-2xl' onClick={() => setIsLogin(!isLogin)} >

                        {isLogin ? "Need a account create" : "Login with your current account"}

                    </button>

                </div>

                {isLogin? <LoginForm /> : <SignupForm />}

            </div>
        </>

    )
}
