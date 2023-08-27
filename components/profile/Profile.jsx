import React, { useState } from 'react'

export default function Profile({ profile }) {
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lastName, setLastName] = useState(profile.lastName)
  const [email, setEmail] = useState(profile.email)
  const [yearOfStudy, setYearOfStudy] = useState(profile.yearOfStudy)
  const [major, setMajor] = useState(profile.major)
  const [courses, setCourses] = useState(profile.courseCodes)

  console.log(yearOfStudy)
  
  async function submitFormHandler(event) {
    event.preventDefault();

    const reqBody = {
      studentId: profile.studentId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      yearOfStudy: yearOfStudy,
      courseCodes: courses
    }

    const response = await fetch('/api/profile', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const result = await response.json()

    console.log(result)
  }

  return (
    <main className='mx-auto max-w-5xl py-1 min-h-screen mt-10'>
      <div className='mx-auto max-w-5xl py-1 min-h-screen mt-16'>
        <div className='p-10 flex flex-col'>
          <h1 className='font-bold text-red-500 text-3xl py-3 text-center'>{profile.studentId}&apos;s Profile</h1>
          <form className='self-center w-5/6'onSubmit={submitFormHandler}>
            <div className='mb-6'>
              <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>First Name</label>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className='mb-6'>
              <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Last Name</label>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className='mb-6'>
              <label className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Email</label>
              <input className='bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-6'>
              <label for="yearOfStudy" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Year of study</label>
              <select id="yearOfStudy" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setYearOfStudy(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className='mb-6'>
              <label for="major" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Major</label>
              <select id="major" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setMajor(e.target.value)}>
                <option>Computer Science</option>
                <option>Civil Engineering</option>
                <option>Sociology</option>
                <option>Psychology</option>
                <option>Philosophy</option>
                <option>Mechanical Engineering</option>
              </select>
            </div>
            <div className='flex flex-row justify-center'>
              <button type="button" className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
            </div>
          </form>
          </div>
      </div>
    </main>
  )
}
