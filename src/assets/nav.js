import './css/nav.css';

/** 
 **  l'utilisation de la liste doit être fait avec une boucle 
*/

function Nav() {
  return (
    <div className="navigation">
        <ul>
            <li>Apprentissage</li>
            <li>React simple</li>
            <li>Nous contacter</li>
        </ul>
    </div>
  );
}

export default Nav;
