import React, {useEffect} from 'react'
import axios from 'axios'

const CookieTest = () => {

  useEffect(()=>{
    axios.get('http://localhost:8000/api/cookie')
    .then(res=>{
        console.log(res.data)
      })
    .catch(err=>{
      console.log(err)
    })
  })





  return (
    <div>CookieTest</div>
  )
}

export default CookieTest