import React from 'react'
import Search from '@/components/layout/Search'
import ModulesListItem from '@/components/modules/ModulesListItem'
import { useRouter } from 'next/router'
import PaginationNavBar from '@/components/layout/PaginationNavBar'

function CoursesPage(props, params) {
  const { loadedModules } = props
  const router = useRouter()
  const totalNumOfModules = loadedModules && loadedModules.length > 0 ? loadedModules[0].total : 0
  const maxNumOfPages = Math.ceil(totalNumOfModules / 10)

  let {current, prev, next, items} = paginate(parseInt(router.query.pagenumber), maxNumOfPages)
  console.log(items)
  console.log("next ", next)
  console.log("prev ", prev)
  console.log("current ", current)

  return (
    <main className="mx-auto max-w-5xl py-1 min-h-screen mt-16">
      <Search />
      <p className='my-2 p-5 text-right border-b border-slate-400 font-semibold'>
        {totalNumOfModules} courses found
      </p>
      <ul>
        { loadedModules.map((module) => <ModulesListItem key={module.courseCode} module={module} /> ) }
      </ul>
      <PaginationNavBar current={current} prev={prev} next={next} items={items} />
    </main>
  )
}

function paginate(current, max) {
  if (!current || !max) return null

  let prev = current === 1 ? null : current - 1,
      next = current === max ? null : current + 1,
      items = [1]

  if (current === 1 && max === 1) return {current, prev, next, items}
  if (current > 4) items.push('…')

  let r = 2, r1 = current - r, r2 = current + r

  for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

  if (r2 + 1 < max) items.push('…')
  if (r2 < max) items.push(max)

  return {current, prev, next, items}
}

export async function getStaticProps(context) {
  const { params } = context
  const pagenumber = params.pagenumber
  const skip = (pagenumber - 1) * 10

  const response = await fetch(`http://localhost:8081/api/v1/modules/${skip}/10`)
  if (!response.ok) return undefined
  const data = await response.json()
  const modules = data.data

  if (!modules) {
    return { notFound: true}
  }

  return {
    props: {
      loadedModules: modules,
    },
    revalidate: 60 * 60,
  }
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:8081/api/v1/modules/numberOfModules')
  const data = await response.json()
  const numOfModules = data.data

  const numOfPages = Math.ceil(numOfModules / 10)
  let pages = Array.from({length: numOfPages}, (_, i) => i + 1)
  const pathsWithParams = pages.map((page) => ({ params: { pagenumber : page.toString() } }))

  return {
    paths: pathsWithParams,
    fallback: false
  }
}

export default CoursesPage