import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession, signOut, getSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session, status } = useSession()

  function signOutHandler() {
    signOut()
  }

  return (
    <div className='bg-white fixed top-0 left-0 right-0 border-b-slate-300 border-b w-full flex-none'>
      <div className='max-w-7xl mx-auto'>
        <div className='mx-4 py-4'>
          <div className='relative flex items-center'>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                width={200}
                height={200}
                alt = "Logo of student2modules"
              />
            </Link>
            <div className='relative flex ml-auto items-center'>
              <nav className='leading-6 font-bold text-slate-700'>
                <ul className='flex space-x-8'>
                  <li>
                    <Link 
                      href={{
                        pathname: "/courses/page/[pagenumber]",
                        query: {pagenumber: 1},
                      }}
                    >
                      Modules
                    </Link>
                  </li>
                  <li>
                    <Link href='/recommendations'>Recommendations</Link>
                  </li>
                  <li>
                    <Link href='/profile'>Profile</Link>
                  </li>
                  <li>
                    <Link href='#'>Settings</Link>
                  </li>
                  {!session && status === 'unauthenticated' && (
                    <li>
                      <Link href='/login'>Sign In</Link>
                    </li>
                  )}
                  <li>
                    <Link href='/register' className='rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-800'>Sign Up</Link>
                  </li>
                  {session && (
                    <li>
                      <button onClick={signOutHandler}>Sign Out</button>
                    </li>
                  )}
                  <li>
                    <Link href='/about'>About</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
