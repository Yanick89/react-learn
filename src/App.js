
import Header from './assets/header'
import Like from './jour-2/like'
import Side from './jour-3/Side'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='section-body'>
        <Side />
        <Like />
      </div>
    </div>
  );
}

export default App;
