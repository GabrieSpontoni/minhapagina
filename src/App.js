//import Capturar from './Capturar.PNG'
import './App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';



function App() {
  const [showSidebar, setShowSideBar] = useState(false);
  const OpenSideBar = () => {
    setShowSideBar (true)
  }
  const CloseSideBar = () => {
    setShowSideBar(false)
  }

  return (
    <div className="App">
      
      <div onClick = {OpenSideBar} style = {{right: showSidebar?-40:40}} className = 'App-hamburguer'>
          <a href> <MenuIcon fontSize = 'large' style = {{color: '#FF5F6D'}}/></a>
      </div>
      <div onClick = {CloseSideBar} style = {{right: showSidebar?40:-40}} className = 'App-close'>
          <a href> <CloseIcon  fontSize = 'large' style = {{color: '#FF5F6D'}}/></a>
      </div>


      <header className="App-header">
        <div className = 'App-header-img-wrapper'>
          <img src = 'https://s.zst.com.br/cms-assets/2021/02/capa-melhor-processador-1-.jpg' alt = '' ></img>
        </div>

        <div className= 'App-header-banner'>
          <h1>Engenheiro de computação </h1>
          <p>Gabriel Spontoni</p>
          <button>Saiba mais</button>
        </div>
        
      </header>

      <aside className = 'App-sidebar' style={{right: showSidebar?0:-400}} >
        <nav>
          <ul className = 'App-menu'>
            <li className = 'App-menu-item'><a href className = 'App-menu-link'>Home</a> </li>
            <li className = 'App-menu-item'><a href className = 'App-menu-link'>Conhecimentos</a> </li>
            <li className = 'App-menu-item'><a href className = 'App-menu-link'>Projetos</a> </li>
            <li className = 'App-menu-item'><a href className = 'App-menu-link'>Contato</a> </li>
            <li className = 'App-menu-item'><a href className = 'App-menu-link'>Orçamento</a> </li>
          </ul>
        </nav>
        <div className = 'App-social-media'>
          <a href> <FacebookIcon fontSize = 'large'/></a>
          <a href> <GitHubIcon   fontSize = 'large'/></a>
          <a href> <TwitterIcon  fontSize = 'large'/></a>
        </div>
      </aside>

      <section className = "App-sessao-conhecimentos">
        <div className = 'App-sessao-header'>
          <h1>Conhecimentos</h1>
        </div>
        <div className = 'App-conhecimentos'>
          <div className = 'App-conhecimento'>
            <div className = 'App-conhecimento-header'>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js" class="svg-inline--fa fa-js fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>
              <h3>JavaScript</h3>
            </div>
            <div className = 'App-conhecimento-text'>
              <p>App conhecimento text</p>
            </div>
          </div>
          <div className = 'App-conhecimento'>
            <div className = 'App-conhecimento-header'>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="python" class="svg-inline--fa fa-python fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"></path></svg>
              <h3>Python</h3>
            </div>
            <div className = 'App-conhecimento-text'>
              <p>App conhecimento text</p>
            </div>
          </div>
          <div className = 'App-conhecimento'>
            <div className = 'App-conhecimento-header'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" class="svg-inline--fa fa-database fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path></svg>
              <h3>SQL</h3>
            </div>
            <div className = 'App-conhecimento-text'>
              <p>App conhecimento text</p>
            </div>
          </div>
          <div className = 'App-conhecimento'>
            <div className = 'App-conhecimento-header'>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copyright" class="svg-inline--fa fa-copyright fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path></svg>
              <h3>Linguagem C</h3>
            </div>
            <div className = 'App-conhecimento-text'>
              <p>App conhecimento text</p>
            </div>
          </div>
          <div className = 'App-conhecimento'>
            <div className = 'App-conhecimento-header'>
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" class="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
              <h3>Git e Github</h3>
            </div>
            <div className = 'App-conhecimento-text'>
              <p>App conhecimento text</p>
            </div>
          </div>
          
        </div>


      </section>



      
    </div>
  );
}

export default App;
