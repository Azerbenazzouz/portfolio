import React from 'react';

export default function Footer() {
  return (
    <React.Fragment>
      <hr/>
        <footer role="contentinfo" class="text-center">
        <h3 class="font-bold uppercase">
        Let's connect!
        </h3>
        <div class="container pt-2 pb-5">  
        <a class="btn-floating btn-lg btn-fb" type="button" role="button" target="_blank" href="https://www.facebook.com/azer.benazzouz"><i class="bi bi-facebook"></i></a>
        <a class="btn-floating btn-lg btn-tw" type="button" role="button" target="_blank" href="https://twitter.com/AzerBenazzouz"><i class="bi bi-twitter"></i></a>
        <a class="btn-floating btn-lg btn-li" type="button" role="button" target="_blank" href="https://www.linkedin.com/in/azer-ben-azzouz-123580148/"><i class="bi bi-linkedin"></i></a>
        <a class="btn-floating btn-lg btn-ins" type="button" role="button" target="_blank" href="https://www.instagram.com/azerbenazzouz/"><i class="bi bi-instagram"></i></a>
        <a class="btn-floating btn-lg btn-yt" type="button" role="button" target="_blank" href="https://www.youtube.com/channel/UCqkzAzzHtFGDyNRdPJZntOw"><i class="bi bi-youtube"></i></a>
        <a class="btn-floating btn-lg btn-git" type="button" role="button" target="_blank" href="https://github.com/52118041azer"><i class="bi bi-github"></i></a>
        <p class="fw-bolder">
        Build with <img src="./img/love.svg" alt="" srcset=""/> Azer Ben Azzouz © 2021 
         <br/>Powered by <a class="light dark" target="_blank" href="https://reactjs.org/">React</a>
        </p>
            
            <a class="btn btn-primary flex justify-center mt-8" href="#top" role="button">Back to top</a>
        </div>
        </footer>
    </React.Fragment>
  );
}
