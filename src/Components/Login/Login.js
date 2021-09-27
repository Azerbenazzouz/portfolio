import React,{useState,useContext} from 'react'
import { Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
import { auth } from '../../firebase';

export default function Login() {
    const  History = useHistory();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [check,setcheck]=useState(false)
    const [err,seterr]=useState('')
    const submit=()=>{
        auth.signInWithEmailAndPassword(email, password)
        .then(function (response) {
            History.push('/home')
            seterr('sucsses')
        })
        .catch(function (error) {
            seterr(error.message)
        });
    }
    return (
        <div className='container mt-5 pt5 pb-3 mb-4'>
            <h1 class='h1 text-primary text-center text-uppercase pb-2'>login</h1>
            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-3">
                </div>
                <div className="col-6">
                    <div className="row">
                        <div class="mb-3 ">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3  form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" value={check} onChange={(e)=>{setcheck(e.target.checked)}}/>
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                        <Link to="/regester" class='text-end mt-2'>I dont have an account</Link>
                        <h4 style={{color:'red'}}>{err}</h4>
                    </div>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}
