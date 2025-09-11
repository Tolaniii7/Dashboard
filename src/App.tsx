import {Route, Routes} from 'react-router-dom'
import './index.css'   
import HomePage from './pages/HomePage'
import AppSideBar from './components/AppSideBar'
import ReportPage from './pages/ReportPage'

const App = () => {

  
  return (
    < div className='w-full  flex bg-[var(--brand-700)] dark:bg-[var(--brand-900)] min-h-screen  '>
      <div className=' flex-shrink-0 '>
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
