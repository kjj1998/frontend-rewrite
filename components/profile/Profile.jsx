import React, { useState, useContext, useEffect } from 'react'
import { Tooltip } from 'flowbite-react'
import NotificationContext from '@/store/notification-context.js'
import { fetchAllModulesByFaculties } from '@/lib/fetchModuleData'

export default function Profile({ profile, faculties }) {
  const [firstName, setFirstName] = useState(profile.firstName)
  const [lastName, setLastName] = useState(profile.lastName)
  const [email, setEmail] = useState(profile.email)
  const [yearOfStudy, setYearOfStudy] = useState(profile.yearOfStudy)
  const [major, setMajor] = useState(profile.major)
  const [courses, setCourses] = useState(profile.courseCodes)
  
  const [coursesForFaculty, setCoursesForFaculty] = useState([])
  const [faculty, setFaculty] = useState(faculties[0])

  const notificationContext = useContext(NotificationContext)

  useEffect(() => {
    const fetchCourses = async () => { 
      const response = await fetch(`/api/modules/faculty/${faculty}`)
      const courses =  await response.json()

      setCoursesForFaculty(courses.data)
    }

    fetchCourses()
  }, [faculty])

  // console.log(faculties[0])
  // console.log(coursesForFaculty)
  
  async function submitFormHandler(event) {
    event.preventDefault();

    // notificationContext.showNotification({
    //   title: "",
    //   message: "",
    //   status: ""
    // })

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

    // if successful, show notification here

    // if error, also show notification
  }

  return (
    <main className='mx-auto max-w-7xl py-1 min-h-screen mt-10'>
      <div className='mx-auto max-w-7xl py-1 min-h-screen mt-16'>
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
              <label htmlFor="yearOfStudy" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Year of study</label>
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
              <label htmlFor="major" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Major</label>
              <select defaultValue={major} id="major" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setMajor(e.target.value)}>
                <option>Computer Science</option>
                <option>Computer Engineering</option>
                <option>Mechanical Engineering</option>
              </select>
            </div>
            <div className='mb-6'>
              <h2 className='block mb-2 text-lg font-medium text-gray-900 dark:text-white'>Modules</h2>
              <div className='flex flex-row justify-between mb-5'>
                <div className='w-5/12 mr-2'>
                  <label htmlFor="faculty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Faculty</label>
                  <select id="faculty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setMajor(e.target.value)}>
                  { faculties.map((faculty) => <option key={faculty}>{faculty}</option>) }
                  </select>
                </div>
                <div className='w-7/12'>
                  <label htmlFor="faculty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modules</label>
                  <select id="faculty" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setMajor(e.target.value)}>
                  { coursesForFaculty.map((course) => <option key={course}>{course}</option>) }
                  </select>
                </div>
              </div>
              <h2 className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Modules taken</h2>
              <div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg'>
                <div className='m-2 p-1 flex flex-row border bg-gray-50 w-min'>
                <Tooltip content="CZ2005 Operating Systems" arrow={false}>
                  <span className='mt-1 mr-1 font-medium'>CZ2005</span>
                </Tooltip>
                  <button type="button" className='border rounded-full border-blue-400 focus:ring-gray-200 hover:bg-slate-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex flex-row justify-center'>
              <button type="submit" className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
            </div>
          </form>
          </div>
      </div>
    </main>
  )
}
