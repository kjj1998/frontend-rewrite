import React from 'react'
import { useRef } from 'react'
import Profile from '../../components/profile/Profile.jsx'

function ProfilePage(props) {
  // const { loadedProfile } = props

  const loadedProfile = {
    studentId: "U1920099E",
    email: "email@example.com",
    major: null,
    firstName: "John",
    lastName: "Doe",
    yearOfStudy: 2,
    courseCodes: [
      "CC0003",
      "CC0005",
      "MH1810",
      "MH1812",
      "SC1003",
      "SC1005",
      "SC1013"
    ]
  }

  if (!loadedProfile) {
    return <h1 className='mt-20 font-bold text-lg'>Loading ...</h1>
  }

  return (
    <Profile profile={loadedProfile} />
  )
}

// export async function getServerSideProps(context) {
//   const { params, req, res } = context

//   const userId = 'U1920099E'

//   const response = await fetch(`http://localhost:8081/api/v1/students/${userId}`)

//   const data = await response.json()
//   const student = data.data

//   if (!student) {
//     return { notFound: true}
//   }

//   return {
//     props: {
//       loadedProfile: student,
//     }
//   }
// }

export default ProfilePage