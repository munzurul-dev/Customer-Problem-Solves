import { Suspense, useState } from 'react'
import './App.css'
import DashboardSummary from './Components/DashboardSummary/dashboardSummary'
import Navbar from './Components/Navbar/navbar'
import AllTicketCard from './Components/AllTicketCard/allTicketCard'
import NewTask from './Components/NewTask/newTask'


function App() {
  const ticketDataFetch = async () =>{
    const res = await fetch("/ticket.json")
    return res.json()
  }

  const ticketPromise = ticketDataFetch();
 const [ticketCard , setTicketCard] = useState([])
 
  return (
    <>
   
        
            
          
     <Navbar></Navbar>
     <div className='max-w-6xl mx-auto lg:p-0 md:p-2 sm:p-0' >
      <Suspense
      fallback={
            <h2>Content Loading</h2>
          }
      >

         <DashboardSummary ticketCard={ticketCard}></DashboardSummary>
      </Suspense>
      
       <div className='lg:grid grid-cols-4 gap-5'>
        
        <Suspense
        fallback={
            <h2>Content Loading</h2>
          }>
            <div className=' col-span-3'>
          <AllTicketCard setTicketCard={setTicketCard} ticketCard={ticketCard} ticketPromise={ticketPromise}></AllTicketCard>
        </div>
          
          <div className='col-span-1'>
        
            <div className=''>
              <NewTask ticketCard={ticketCard}></NewTask>
              
            </div>
            <div></div>
          </div>
         
        </Suspense>
       </div>
     </div>
    </>
  )
}

export default App
