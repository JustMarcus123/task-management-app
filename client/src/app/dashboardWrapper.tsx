import React from 'react'
import Sidebar from './(components)/sidebar'
import Navbar from './(components)/navbar'

const DashboardWrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex min-h-screen bg-gray-50 w-full text-gray-900' >
  {/*sidebar*/}
<Sidebar/>
<main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg`}>
    <Navbar/>
</main>
    </div>
  )
}

export default DashboardWrapper
