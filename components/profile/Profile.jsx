import React, { useState, useContext, useEffect, Fragment } from 'react'
import { Tooltip } from 'flowbite-react'
import NotificationContext from '@/store/notification-context.js'
import ModuleTaken from './ModuleTaken'
import Input from './Input'
import DropdownInput from './DropdownInput'
import ModulesSelection from './ModulesSelection'

export default function Profile({ profile, faculties }) {
  const [firstName, setFirstName] = useState(profile.firstName === null ? "" : profile.firstName)
  const [lastName, setLastName] = useState(profile.lastName === null ? "" : profile.lastName)
  const [email, setEmail] = useState(profile.email)
  const [yearOfStudy, setYearOfStudy] = useState(profile.yearOfStudy)
  const [major, setMajor] = useState(profile.major)
  const [modulesTaken, setModulesTaken] = useState(profile.courseCodes)
  
  const [modulesForFaculty, setModulesForFaculty] = useState([])
  const [faculty, setFaculty] = useState(faculties[0])
  const [academicYears, setAcademicYears] = useState([1, 2, 3, 4, 5, 6])
  const [academicMajors, setAcademicMajors] = useState(['Computer Science', 'Mechanical Engineering'])

  const notificationContext = useContext(NotificationContext)
  
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
      courseCodes: modulesTaken.map((module) => module.substring(0, 6))
    }

    const response = await fetch('/api/profile', {
      method: 'PUT',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const result = await response.json()

    console.log(result)

    // if successful, show notification here

    // if error, also show notification
  }

  return (
    <main className='mx-auto max-w-7xl py-1 min-h-screen mt-10'>
      <div className='mx-auto max-w-7xl py-1 min-h-screen mt-16'>
        <div className='p-10 flex flex-col'>
          <h1 className='font-bold text-red-500 text-3xl py-3 text-center'>{profile.studentId}&apos;s Profile</h1>
          <form className='self-center w-5/6'onSubmit={submitFormHandler}>
            <Input title='First Name' value={firstName} setValue={setFirstName} id='firstName'/>
            <Input title='Last Name' value={lastName} setValue={setLastName} id='lastName'/>
            <Input title='Email' value={email} setValue={setEmail} id='email'/>
            <DropdownInput title='Year of study' id='yearOfStudy' setSelectedOption={setYearOfStudy} options={academicYears}/>
            <DropdownInput title='Major' id='major' setSelectedOption={setMajor} options={academicMajors}/>
            <ModulesSelection 
              faculties={faculties} 
              modulesForFaculty={modulesForFaculty} 
              modulesTaken={modulesTaken} 
              setModulesTaken={setModulesTaken}
              setModulesForFaculty={setModulesForFaculty}
              faculty={faculty}
              setFaculty={setFaculty}
            />
            <div className='flex flex-row justify-center'>
              <button type="submit" className="self-center text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update Profile</button>
            </div>
          </form>
          </div>
      </div>
    </main>
  )
}
