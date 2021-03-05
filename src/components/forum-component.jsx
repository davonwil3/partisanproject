import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons'
import { propTypes } from "react-bootstrap/esm/Image";


function ForumsSection(props){






return(


    <div className="flex-container forum-feed">
        
        <div className="forum-topic flex-container">
            <em className="forum-title">Politics</em>


        </div>
        <div className="forum-topics flex-container">
            <div className="discussion-container flex-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.55" height="25.582" viewBox="0 0 32.55 35.582" className="comment-icon">
                    <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M29.451,18A14.926,14.926,0,0,1,28.2,24.042c-1.995,4.575-6.073,7.465-10.535,7.467A10.427,10.427,0,0,1,12.4,30.08L4.5,33.1l2.634-9.056A14.925,14.925,0,0,1,5.886,18,13.826,13.826,0,0,1,12.4,5.93,10.427,10.427,0,0,1,17.668,4.5h.693c5.982.378,10.759,5.853,11.089,12.71Z" transform="translate(2.449 -3.432) rotate(9)" fill="#d80101" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>

                <div className="discussion-topic flex-container">
                    <em className="topic-font">{props.topic1}</em>
                    <em className="topic-description">{props.discussion1}</em>
                </div>
            </div>
            <div className="discussion-container flex-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.55" height="25.582" viewBox="0 0 32.55 35.582" className="comment-icon">
                    <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M29.451,18A14.926,14.926,0,0,1,28.2,24.042c-1.995,4.575-6.073,7.465-10.535,7.467A10.427,10.427,0,0,1,12.4,30.08L4.5,33.1l2.634-9.056A14.925,14.925,0,0,1,5.886,18,13.826,13.826,0,0,1,12.4,5.93,10.427,10.427,0,0,1,17.668,4.5h.693c5.982.378,10.759,5.853,11.089,12.71Z" transform="translate(2.449 -3.432) rotate(9)" fill="#d80101" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>
                <div className="discussion-topic flex-container">
                    <em className="topic-font">{props.topic2}</em>
                    <em className="topic-description">{props.discussion2}</em>
                </div>
            </div>
            <div className="discussion-container flex-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.55" height="25.582" viewBox="0 0 32.55 35.582" className="comment-icon">
                    <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M29.451,18A14.926,14.926,0,0,1,28.2,24.042c-1.995,4.575-6.073,7.465-10.535,7.467A10.427,10.427,0,0,1,12.4,30.08L4.5,33.1l2.634-9.056A14.925,14.925,0,0,1,5.886,18,13.826,13.826,0,0,1,12.4,5.93,10.427,10.427,0,0,1,17.668,4.5h.693c5.982.378,10.759,5.853,11.089,12.71Z" transform="translate(2.449 -3.432) rotate(9)" fill="#d80101" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>
                <div className="discussion-topic flex-container">
                    <em className="topic-font">{props.topic3}</em>
                    <em className="topic-description">{props.discussion3}</em>
                </div>
            </div>
            <div className="discussion-container flex-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="25.55" height="25.582" viewBox="0 0 32.55 35.582" className="comment-icon">
                    <path id="Icon_feather-message-circle" data-name="Icon feather-message-circle" d="M29.451,18A14.926,14.926,0,0,1,28.2,24.042c-1.995,4.575-6.073,7.465-10.535,7.467A10.427,10.427,0,0,1,12.4,30.08L4.5,33.1l2.634-9.056A14.925,14.925,0,0,1,5.886,18,13.826,13.826,0,0,1,12.4,5.93,10.427,10.427,0,0,1,17.668,4.5h.693c5.982.378,10.759,5.853,11.089,12.71Z" transform="translate(2.449 -3.432) rotate(9)" fill="#d80101" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                </svg>
                <div className="discussion-topic flex-container">
                    <em className="topic-font">{props.topic4}</em>
                    <em className="topic-description">{props.discussion4}</em>
                </div>
            </div>
        </div>
        
        
    </div>


)










}


export default ForumsSection;