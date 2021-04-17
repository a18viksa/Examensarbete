import './App.css';
import PlotlyLineChart from './chart';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className="container">
      <Sidebar/>
      <PlotlyLineChart/>
    </div>
  );
}

export default App;
