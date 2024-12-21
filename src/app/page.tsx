import React from 'react'
import Carscard from "./components/carscard"

import Timebar from './components/timebar'
import Herocards from './components/herocards'
const page :React.FC = () => {
  return (
    <div>
       <Herocards />
       <Timebar />
     <div className=''><Carscard/></div>
    
      
    </div>
  )
}

export default page