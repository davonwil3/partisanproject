
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Nav from './navbar';

function Homepage() {
    
    
  return(
  <div>
    <div id="frontpage" className="flex-container wrapper">
      <div className="nav-align">
        <Nav
        type = "dark"
        
        />
      </div>
        
          <div className="flex-container banner-content">
            <div className="flex-container heading">
            <h1 >Get the news, stay informed</h1>
            <h1>Debate politics</h1>
            </div>
        
        
            <div className="flex-container login-container">
              <TextField id="standard-basic" label="Username" style = {{width: 300 , marginBottom: 40 , marginTop: 50}} />
              <TextField id="standard-basic" label="Password" type="password" style = {{width: 300}} />
              <Button variant="contained" color="primary" style = {{width: 300 , marginTop: 50}}>
                Log in
              </Button>
              <div className="divider"></div>
              <Button variant="contained" color="secondary" style = {{width: 200 , marginTop: 30}}>
                Create Account
              </Button>
            </div>
        
          </div>
  
  
  
    </div>
    <div id="app-features" className="flex-container">
    
      <div className="flex-container features">
        <div className="flex-container features-description">
          <img src = "assets/svg-news.svg" className="svg-news"/>
          <h3 className="features-title">Get the news</h3>
          <p>Partisan gives you the latest news in conservative or liberal politics based on your preference </p>
          
        </div>
        
        <div className="flex-container features-description">
          <img src = "assets/svg-voting.svg" className="svg-news"/>
          <h3 className="features-title"> Stay informed</h3>
          <p>Find out what is going on in state and local politics. Keep up to date on what bills are being voted on in Congress.</p>
          
        </div>
        
        
        <div className="flex-container features-description">
          <img src = "assets/svg-debate.svg" className="svg-news"/>
          <h3 className="features-title"> Debate politics</h3>
          <p>Create your own profile and discuss politics <br/>With people on a variety of topics.</p>
          
        </div>

      </div>
    
    
    </div>
  
  
  
  </div>
  
  )  
    
    
    
}


export default Homepage;


