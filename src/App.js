import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header.component';
import HomePage from './pages/homepage/HomePage.component';
import Shop from './pages/shop/Shop.component';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp.component';

const  Hats=()=>{
  return <h1>Hats Section</h1>
}
function App() {
  return (
    <body>
      <Header/>
      <Switch>
        <Route exact={true} path = "/" component={HomePage}/>
        <Route  path= "/shop" component={Shop} />
        <Route path="/Sign_in_sign_up"  component={SignInAndSignUp}/>
      </Switch>
    </body>
  );
}

export default App;
