import React,{useState} from 'react'
import { Link} from 'react-router-dom';
import { auth } from '../../firebase';
import {useHistory} from 'react-router-dom'

export default function Regester() {
    const  History = useHistory();
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [check,setcheck]=useState(false)
    const [err,seterr]=useState('')
    const submit=()=>{
        auth.createUserWithEmailAndPassword(email, password)
            .then(function (response) {
                seterr('')
                History.push('/login')
            })
            .catch(function (error) {
                seterr(error.message)
            });
    }
    return (
        <div className='container mt-5 pt5 pb-3 mb-4'>
            <h1 class='h1 text-primary text-center text-uppercase pb-2'>regester</h1>
            <div className="row mt-5 pt-5 pb-5 mb-5">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div class="mb-3 ">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label" >Password</label>
                            <input type="password" class="form-control" id="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div class="mb-3  form-check">
                            <input type="checkbox" class="form-check-input" id="check" value={check} onChange={(e)=>{setcheck(e.target.checked)}}/>
                            <label class="form-check-label" for="check">Check me out</label>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={submit}>Submit</button>
                        <Link to="/login" class='text-end mt-2'>I have an account</Link>
                        <h4 style={{color:'red'}}>{err}</h4>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}
