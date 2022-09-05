import logo from './logo.svg';
import './App.css';
import PersonList from "./components/PersonList";
import PersonDetail from "./components/PersonDetail";
import ErrorBoundry from './error-boundry/ErrorBoundry';


function App() {
  return (
    <div className="App">
      <ErrorBoundry>
      <PersonList/>
      <PersonDetail/>
      </ErrorBoundry>

    </div>
  );
}

export default App;
