import './App.css';
import Lines from './chart';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Lines/>
      
    </div>
  );
}

export default App;
