import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
const  Hats=()=>{
  return <h1>Hats Section</h1>
}
function App() {
  return (
    <body>
      <Switch>
        <Route exact={true} path = "/" component={HomePage}/>
        <Route  path= "/shop" component={Shop} />
      </Switch>
    </body>
  );
}

export default App;
