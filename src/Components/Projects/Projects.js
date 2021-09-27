import React from 'react';

export default function Projects() {
  return (
    <React.Fragment>
        <div className="container text-center pt-4 pb-4">
            <h1 class='h1 text-primary text-uppercase pb-3 pb-3'>My Web Projects</h1>
            
            <div class="card-group pt-4 pb-4">
                <div class="card">
                    <img src="./img/facebook-pr.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Facebook clone</h5>
                    <p class="card-text">This is facebook clone create by reactjs , firebase and bootstrap.</p>
                    </div>
                    <div class="card-footer">
                        <a href='https://facebook-azer.netlify.app' target="_blank" class='btn btn-primary me-4 mb-2'>go to the site</a>
                        <a href='' target="_blank"  class='btn btn-success disabled me-4 mb-2'>go to Github</a>
                    </div>
                </div>
                <div class="card">
                    <img src="./img/chat-pr.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Chat with me</h5>
                    <p class="card-text">This is a chat like messenger or whatsapp site created by reactjs and bootstrap .</p>
                    </div>
                    <div class="card-footer">
                        <a href='https://chat-with-me-azer.netlify.app/' target="_blank" class='btn btn-primary me-4 mb-2'>go to the site</a>
                        <a href='' className='btn btn-success disabled me-4 mb-2' target="_blank">go to Github</a>
                    </div>
                </div>
                <div class="card">
                    <img src="./img/covid-pr.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Covid Traker</h5>
                    <p class="card-text">This website is made available to all citizens, so that they can follow the latest developments regarding the state's efforts to limit the spread of the Coronavirus. The information is updated real-time and without interruption.Citizens are requested to abide by the updated procedures to prevent disease.</p>
                    </div>
                    <div class="card-footer">
                    <a href='' target="_blank" class='btn btn-primary disabled  me-4 mb-2'>go to the site</a>
                    <a href='https://github.com/52118041azer/covid-pr.git' target="_blank" class='btn btn-success me-4'mb-2>go to Github</a>
                    </div>
                </div>
                </div>
        </div>
    </React.Fragment>
  );
}
