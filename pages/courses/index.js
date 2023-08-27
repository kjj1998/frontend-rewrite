import React from 'react'

function Courses(props) {
  return (
    <div>Courses</div>
  )
}

export async function getStaticProps(context) {

  return { 
    props: {

    },
    revalidate: 10,
    notFound: false,
  }
} 

export default Courses