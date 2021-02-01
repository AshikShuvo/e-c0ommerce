import { Route, Router } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
const  Hats=()=>{
  return <h1>Hats Section</h1>
}
function App() {
  return (
    <div  >
        <Route exact={true} path = "/" component={HomePage}/>
        <Route  path= "/hats" component={Hats} />
    </div>
  );
}

export default App;
