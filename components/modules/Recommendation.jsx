import React from 'react'
import Link from 'next/link'

export default function Recommendation({ module }) {
  return (
    <div className='mb-16'>
      <h2 className='mb-3 text-xl font-semibold text-cyan-600 mt-1 hover:text-cyan-800'>
        <Link href={`/courses/${module.courseCode}`}>
          {module.courseCode} <span className='lowercase'>{module.courseName}</span> (score: {module.score.toPrecision(2)})
        </Link>
      </h2>
      <p className='text-slate-600 mb-4'>
        {module.faculty} • {module.gradeType} • {module.academicUnits} AU(s)
      </p>
      <p className='text-slate-600 mb-4'>
        {module.courseInformation}
      </p>
    </div>
  )
}
