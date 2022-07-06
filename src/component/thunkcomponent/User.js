import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { apidata } from '../../action/userAction'
import { useEffect } from 'react'

const User = () => {
  const data=useSelector((state=>state.user.users))
  console.log(data);
 
  
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(apidata())

  },[dispatch])
  
  return (
    <>
   
   <div>{data.map((elem)=>{
      console.log(elem.name)
      return(
        
      
          <li>{elem.name}</li>
        
      )
    })}</div> 
    
</>
  )
}

export default User