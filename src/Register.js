import React,{useState} from 'react'

function Register(){
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    function signUp(){
        
        let item = {name,password,email}
        console.warn(item)
    }

    return(
        <div className="col-md-6 offset-sm">
        <h1> Register Page </h1>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
        <br />
        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
        <br />
        <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
        <br />
        <button className="btn btn-primary" onClick={signUp}> Sign Up </button>
        </div>
    )
}

export default Register