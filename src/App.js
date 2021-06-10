//import Capturar from './Capturar.PNG'
import './App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <div className="App">
      
      <div className = 'App-hamburguer' alt = "">
          <a href = '#'> <MenuIcon fontSize = 'large' style = {{color: '#FF5F6D'}}/></a>
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

      <div className = 'App-sidebar'>
        <nav>
          <ul className = 'App-menu'>
            <li className = 'App-menu-item'><a href = '#' className = 'App-menu-link'>Home</a> </li>
            <li className = 'App-menu-item'><a href = '#' className = 'App-menu-link'>Conhecimentos</a> </li>
            <li className = 'App-menu-item'><a href = '#' className = 'App-menu-link'>Projetos</a> </li>
            <li className = 'App-menu-item'><a href = '#' className = 'App-menu-link'>Contato</a> </li>
            <li className = 'App-menu-item'><a href = '#' className = 'App-menu-link'>Orçamento</a> </li>
          </ul>
        </nav>
        <div className = 'App-social-media'>
          <a href = '#'> <FacebookIcon/></a>
          <a href = '#'> <GitHubIcon/></a>
          <a href = '#'> <TwitterIcon/></a>
        </div>

      </div>

      
    </div>
  );
}

export default App;
