import React from 'react';
import './home.css'
export default function Home() {
  return (
    <React.Fragment>
    <div class="container pt-5 pb-5 text-center">
      <div class="row">
        <div class="col-lg" ><img src="https://scontent.ftun18-1.fna.fbcdn.net/v/t39.30808-6/272256926_1011421272774583_7963598134085313868_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=FDjgwjuO1cEAX90sZK8&tn=KMhkKHeITm7ZyrJR&_nc_ht=scontent.ftun18-1.fna&oh=00_AT9xJ6k1u_mmLQvuiE8_8QJB3XBu5GkXs93PjukTG-0ldA&oe=61F07933" class="rounded-circle pt-5 mt-5 mb-5  w-50" alt="..."/></div>
        <div class="col-lg center">
        <p style={{textAlign:'center'}} className='fw-bold fs-1 pt-4 pb-2 '>
          Hello! I am <strong style={{color:'blue' ,fontSize:'40px'}}>Azer Ben Azzouz</strong><br/><strong style={{color:'orange',font:'bold' ,fontSize:'40px'}}>Visual Designer &amp;<br/> Front-end Developer</strong><br/> I work as interface and front end developer. <br/>I have passion for pixel perfect, <br/> minimal and easy to use interfaces.<br/>I design and develop responsive, <br/> optimized and efficient websites. Currently available for freelance opportunities.
        </p>
        <a class="btn-floating btn-lg btn-fb" type="button" role="button" target="_blank" href="https://www.facebook.com/azer.benazzouz"><i class="bi bi-facebook"></i></a>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button" target="_blank" href="https://twitter.com/AzerBenazzouz"><i class="bi bi-twitter"></i></a>
        <a class="btn-floating btn-lg btn-li" type="button" role="button" target="_blank" href="https://www.linkedin.com/in/azer-ben-azzouz-123580148/"><i class="bi bi-linkedin"></i></a>
        <a class="btn-floating btn-lg btn-ins" type="button" role="button" target="_blank" href="https://www.instagram.com/azerbenazzouz/"><i class="bi bi-instagram"></i></a>
        <a class="btn-floating btn-lg btn-yt" type="button" role="button" target="_blank" href="https://www.youtube.com/channel/UCqkzAzzHtFGDyNRdPJZntOw"><i class="bi bi-youtube"></i></a>
        <a class="btn-floating btn-lg btn-git" type="button" role="button" target="_blank" href="https://github.com/Azerbenazzouz"><i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
    <hr/>
    <div>
      <div className="container text-center mt-5 mb-5 pb-5">
      <strong  style={{color:'blue' ,fontSize:'40px'}}>MY ACTUAL STACK</strong>
        <div className="row row-cols-2 text-center pt-5 mt-3">
          <div className="col-lg-4 pt-2">
            <img src="./img/html5.svg" class='img-thumbnail w-25 ' alt="Html5"/>
            <h1>Html5</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/css3.svg" class='img-thumbnail w-25' alt="Css3"/>
            <h1>Css3</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/javascript.svg" class='img-thumbnail w-25' alt="javascript"/>
            <h1>Javascript</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/react.svg" class='img-thumbnail w-25' alt="react"/>
            <h1>react</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/netlify.svg" class='img-thumbnail w-25' alt="netlify"/>
            <h1>netlify</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/git.svg" class='img-thumbnail w-25' alt="git"/>
            <h1>git</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/nodejs.svg" class='img-thumbnail w-25' alt="nodejs"/>
            <h1>nodejs</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/python.svg" class='img-thumbnail w-25' alt="python"/>
            <h1>python</h1>
          </div>
          <div className="col-lg-4 pt-2">
            <img src="./img/firebase.svg" class='img-thumbnail w-25' alt="firebase"/>
            <h1>firebase</h1>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
