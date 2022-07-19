# Gestion Props 

Utilisation simple & basiqus des props dans un composant enfant.

## mot clé `props`
lorsqu'on veut utiliser une `props` dans un composant. On passe en attribut sur le composant appelé dans le parent le nom de la props, ensuite le conténu de la props.

`function parentComponent () { const number = 0; return ( <div> <childComponent numb = {number} /></div>)}`