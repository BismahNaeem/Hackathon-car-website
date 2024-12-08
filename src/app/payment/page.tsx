import React from 'react'
import Payment from '../components/payment'
import Billing from '../components/billing'
import PaymentsMethod from '../components/paymentsmethod'
import Confirmation from '../components/confirmation'

const page = () => {
  return (
    <>
    <div><Payment /></div>
    <Billing />
    <PaymentsMethod />
    
    <Confirmation />
    </>
  )
}

export default page