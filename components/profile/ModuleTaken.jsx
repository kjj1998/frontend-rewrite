import React from 'react'
import { Tooltip } from 'flowbite-react'

export default function ModuleTaken({ modulesTaken, setModulesTaken, courseCode, module }) {
  console.log(module)

  function removeModule(moduleToBeRemoved) {
    setModulesTaken(modulesTaken.filter((module) => module !== moduleToBeRemoved))
  }
  
  return (
    <div key={module} className='m-2 p-1 flex flex-row border bg-gray-50 w-min'>
      {/* <Tooltip content={module} arrow={false} className='px-3'> */}
        <span className='mt-1 mr-1 font-medium'>{courseCode}</span>
      {/* </Tooltip> */}
      <button onClick={() => removeModule(module)} type="button" className='border rounded-full border-blue-400 focus:ring-gray-200 hover:bg-slate-300'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </button>
    </div>
  )
}
