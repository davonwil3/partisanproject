import React, { useState } from "react";
import Nav from './navbar';
import ForumsSection from './forum-component';

function Forums (){

    var Category = 
    <ForumsSection 
        topic1 = "Government Spending"
        discussion1 = "have discussions on the national debt"
        topic2= "Bipartisan topics"
        discussion2 = "discuss bipartisan topics and bills"
    
    />

    function changeForum(category){

    


    }




return (
<div>
    <Nav
    type = "light"
    />  
    <div id="forumsPage" className="flex-container">
       
        <div className="flex-container forum-categories">
            <h4>Categories</h4>
            <div className="categories" onClick={()=>changeForum("politics")}>Politics</div>
            <div className="categories" onClick={()=>changeForum("current")}>Current Events</div>
            <div className="categories" onClick={()=>changeForum("international")}>International News</div>
            <div className="categories" onClick={()=>changeForum("nonpolitical")}>Non Political</div>
            <div className="categories" onClick={()=>changeForum("books")}>Books </div>
            <div className="categories" onClick={()=>changeForum("podcasts")}>Podcasts</div>
        
        
        </div>
        {Category}
        <div className="flex-container forum-advertisement">
        
        
        
        
        </div>
        
        








    </div>






</div>



)






}



export default Forums;