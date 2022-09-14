import React,{useEffect, useState} from 'react'
//import './Register.css'
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import Header from './Header'

function Register(){
    useEffect(()=>{
        if(localStorage.getItem('user-info'))
        {
            history.push('/register')
        }
    },[])
    
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')
    const history = useHistory()

    async function signUp()
    {
        
        let item = {name,password,email}
        console.warn(item)

        // let result = await fetch("https://dummyjson.com/products",{
        let result = await fetch("https://jsonplaceholder.typicode.com/users",{    
            method:'GET',
            //body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        })

        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push('/add')
        console.warn(result)
    }

    return(
        <>
        <Header />
        <div className="col-md-6 offset-sm">
        <h1> Register Page </h1>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
        <br />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
        <br />
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
        <br />
        <Button className="btn btn-primary" onClick={signUp}> Sign Up </Button>
        </div>
        </>
    )
}

export default Register