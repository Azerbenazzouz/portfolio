import React, { useState } from 'react'
import db,{ auth ,rdb} from '../../firebase';
export default function Contact() {
    const [companyName,setcompanyName]=useState('')
    const [companyEmail,setcompanyEmail]=useState('')
    const [message,setmessage]=useState('')
    const [err,seterr]=useState(false)
    const [success,setsuccess]=useState('')
    const [hidden,sethidden]=useState(true)
    const name = auth.currentUser.displayName
    const email = auth.currentUser.email
    const id = auth.currentUser.uid

    const datapush=()=>{
        const date=new Date()
        const data={
            timestamp: date.getFullYear()+'/'+date.getMonth()+'/'+date.getDate(),
            name:name,
            email:email,
            companyName:companyName,
            companyEmail:companyEmail,
            message:message,
            }
            sethidden(false)
        db.collection('contact').doc(id).set(data).then(()=>{
            sethidden(true)
            setsuccess('Message successfully written!')
        })}

        const [req,setreq]=useState({
        timestamp: '',
        name:'',
        email:'',
        companyName:'',
        companyEmail:'',
        message:'',})
        db.collection("contact").doc(id)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    setreq(doc.data())
                }
                
            });
        

        

    const send = ()=>{
        message != '' ? seterr(true):seterr(false)
        companyEmail != '' ? seterr(true):seterr(false)
        companyName != '' ? seterr(true):seterr(false)
        if(message!=''&companyEmail!=''&companyName !=''){
            seterr(false)
            datapush()
        }else{
            seterr(true)
            setsuccess('')
        }
    }

    return (
        <React.Fragment>
        <div className="container pt-5 pb-5">
            <h1 class='h1 text-center text-primary text-uppercase pb-3 pb-3'>contact me</h1>
            <div className="row pb-3 pt-3">
        
        <div className="col">
            <div class="mb-3">
                <label class="form-label h1 text-success">Company Name</label>
                <input type="text" class="form-control mt-3" onChange={(e)=>{setcompanyName(e.target.value)}} placeholder="Company Name"/>
            </div>
            <div class="mb-3">
                <label class="form-label h1 text-success">Company Email</label>
                <input type="email" class="form-control mt-3" onChange={(e)=>{setcompanyEmail(e.target.value)}} placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="Textarea1" class="form-label h1 text-success">Message</label>
                <textarea class="form-control" id="Textarea1" rows="3" onChange={(e)=>{setmessage(e.target.value)}} placeholder="Message"></textarea>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" type="button" disabled={!hidden} onClick={send}>Send</button>
                <div class="spinner-border text-primary" hidden={hidden} role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <h4 hidden={!err} class='text-danger'>You have to complite all</h4>
            <h4 class='text-success'>{success}</h4>
        </div>
        <div className="col-xl ">
        <div>
        <div class="card mb-3 mt-5 ">
            <div class="card-header text-danger">
                <strong>{req.companyName}</strong>
            </div>
            <div class="card-body">
            <blockquote class="blockquote mb-0">
                <h4 class="blockquote mb-4 text-primary">{req.companyEmail}</h4>
                <footer class="blockquote-footer text-dark">
                {req.message}
                </footer>
            </blockquote>
            </div>
            <div class="card-footer text-muted">
                {req.timestamp}
            </div>
        </div>
    </div>
        </div>
        </div>

        </div>
        
        </React.Fragment>
    )
}
