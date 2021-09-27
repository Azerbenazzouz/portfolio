import React,{useState} from 'react'
import { auth } from '../../firebase';
import {useHistory} from 'react-router-dom'

export default function Profile() {
    const [state,setstate]=useState(true)
    const [name,setname]=useState(auth.currentUser.displayName != null ? auth.currentUser.displayName:'No Name')
    const [email,setemail]=useState(auth.currentUser.email)
    const [url,seturl]=useState(auth.currentUser.photoURL)
    const [urlerr,seturlerr]=useState(true)
    const [spinner,setspinner]=useState(false)
    const urlDefult="https://bootdey.com/img/Content/avatar/avatar7.png"
    const dburl =auth.currentUser.photoURL===null?urlDefult:auth.currentUser.photoURL
    const update=()=>{
      setstate(false)
    }
    const  History = useHistory();
    const save=()=>{
      setspinner(true)
      var user = auth.currentUser;
      console.log(user)
      user.updateProfile({
        displayName: name,
        photoURL: url,
      }).then(function() {
        setstate(true)
        History.push('/profile')
        setspinner(false)
        window.location.reload();
      }).catch(function(error) {
        console.log(error)
        setspinner(false)
      });
    }
    
    return (
      <div className="pt-5 pb-5">
            <h1 class='h1 text-center text-primary text-uppercase pb-3 pb-3'>profile</h1>
        <div class="container pt-5">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img onError={()=>seturlerr(false)} src={urlerr ? dburl:urlDefult} alt="Admin" class="rounded-circle" height="150"  width="150"/>
                    <div class="mt-3">
                      <h4 className='text-primary'><strong>{name}</strong></h4>
                      <h4 className='text-success'><strong>{email}</strong></h4>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-md-8">
              <div class="card mb-3 mt-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <span hidden={!state}>{name}</span>
                      <input type="text" hidden={state} value={name} onChange={(e)=>{setname(e.target.value)}}/>
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {email}
                    </div>
                  </div>
                  <hr/>
                  <div class="row" hidden={state}>
                    <div class="col-sm-3">
                      <h6 class="mb-0">Photo Url</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <input type='text' hidden={state} value={url} onChange={(e)=>{seturl(e.target.value)}}/>
                    </div>
                  </div>
                  <hr hidden={state}/>
                  <div class="d-grid gap-2 d-md-flex ms-2">
                    <button class="btn btn-primary me-md-2" type="button" disabled={!state} onClick={update}>UPDATE</button>
                    <button class="btn btn-success" type="button" disabled={state} onClick={save}>SAVE</button>
                    <div class="spinner-border text-info" hidden={!spinner}  role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
