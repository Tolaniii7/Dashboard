import {Route, Routes} from 'react-router-dom'

import HomePage from './pages/HomePage'
import AppSideBar from './components/AppSideBar'
import ReportPage from './pages/ReportPage'

const App = () => {

  
  return (
    < div className='w-full  flex bg-gray-900'>
      <div className=' flex-shrink-0  bg-blue-950'>
        <AppSideBar />
      </div>  

    
       <main className='flex-1 overflow-auto' >
        <Routes>
          <Route path ='/' element= {<HomePage />} />
          <Route path ='/reports' element= {<ReportPage />} />

        </Routes>
       </main>
    
    </div>
  )
}

export default App
