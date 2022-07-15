import logo from '../logo.svg';
import Nav from './nav'
import './css/header.css'

function Header() {
  return (
    <div className="header-main">
      <header className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Nav />
      </header>
    </div>
  );
}

export default Header;