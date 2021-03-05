import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './homepage';
import Forums from './forums';

function Routing(){



    return(
    <Router>
   
    <Switch>
        <Route path="/" exact component={Forums}></Route>
   
    </Switch>
 
    
    
    
    </Router>
    )
    }
    
    
export default Routing;