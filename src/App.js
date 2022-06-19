import React,{useState} from 'react';
import './App.css';
import Home from './Homepage/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Login from './Login';
import { useStateValue } from './Stateprovider';
import Addfreelancer from './Individual/Addfreelancer'
import Postproject from './Individual/Postproject';
import FreelancingIndividual from'./Individual/FreelancerIndividual';
import Projectindividual from './Individual/Projectindividual';
import Paymentform from './Individual/Paymentform';
import ProfileFreelancing from './profilepage/ProfileFreelancing';
import Profileproject from './profilepage/Profileproject';
import Tutorial from './Individual/Tutorial';
import Blog from './Individual/Blog';
import Chat from './chat/Chat';
function App() {
  const[{user},dispatch]=useStateValue();
  console.log(user.displayName,user.email);
  return (
    <div className="App">
     
        
        {!user ?(
          <>
          <Login />
          </>
        ):(
          <Router >
          <Switch> 
            <Route exact path="/"  component={Home} />
          <Route exact path="/addfreelancing"  component={Addfreelancer}/>
          <Route exact path="/postproject"  component={Postproject}/>
          <Route exact path="/freelancing" component={FreelancingIndividual} />
          <Route exact path="/project" component={Projectindividual} />
          <Route exact path="/projectprofile/:id" component={Profileproject} />
          <Route exact path="/freelancingprofile/:id" component={ProfileFreelancing}/>
          <Route exact path="/Tutorial" component={Tutorial} />
          <Route exact path='/blogposts' component={Blog} />
          <Route exact path="/chatbox" component={Chat} />
          <Route exact path="/payment" component={Paymentform} />
          </Switch>
      </Router>
  )
        }
        
    </div>
  );
}

export default App;
