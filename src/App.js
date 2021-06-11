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

      <div className = 'App-sidebar' style={{right: showSidebar?0:-400}} >
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
      </div>

      
    </div>
  );
}

export default App;
