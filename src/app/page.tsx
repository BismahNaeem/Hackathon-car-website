import React from 'react'
import Herosection from './components/herosection'

import Timebar from './components/timebar'
import Herocards from './components/herocards'
const page :React.FC = () => {
  return (
    <div>
       <Herocards />
       <Timebar />
     <div className=''><Herosection /></div>
    
      
    </div>
  )
}

export default page