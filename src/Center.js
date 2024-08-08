import React from "react";
import './Center.css'
function Center(props){
    return(

        <div className="center">
            <div className="center_story">
                <div className="center_story-profil">

                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
 
                    <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>
                     <div className="center_story-profil-story">
                        <div className="center_story-profil-story-pic">
                            <img src="/images/water1.jpg" alt="devil" /> 
                        </div>
                        <div>
                            <h6>KAMALAKANNAN</h6>
                        </div>
                    </div>              
                
                </div>
            </div>

            {/* ---------------------------------------------------------------------------------------- */}

            <div className="center_post">


                <div className="center_post-post">
                    <div className="center_post-post-profil">
                        <div className="center_post-post-profil_pic">
                            <img src="/images/water1.jpg" alt="img"/>
                        </div>
                        <div className="center_post-post-info">
                            <div className="center_post-post-info-name">
                                <div className="center_post-post-info-name-ditals">
                                    <h4>{props.name}</h4>
                                    <h6> . 4d</h6>
                                </div>
                                <div className="center_post-post-info-name-musie">
                                    <h6>{props.aritstName},{props.musicName},(From "{props.movieName}")</h6>
                                </div>
                            </div>    
                            <div className="center_post-post-info-more">
                                <h3>...</h3>
                            </div>    
                        </div>

                    </div>

                    <div className="center_post-post-contant">
                        <img src={props.profilImg} alt="SOME POST HEAR"/>
                    </div>
                    
                    <div className="footer">

                    </div>
                </div>
                

                <div className="center_post-post">
                    <div className="center_post-post-profil">
                        <div className="center_post-post-profil_pic">
                            <img src="/images/water1.jpg" alt="img"/>
                        </div>
                        <div className="center_post-post-info">
                            <div className="center_post-post-info-name">
                                <div className="center_post-post-info-name-ditals">
                                    <h4>{props.name}</h4>
                                    <h6> . 4d</h6>
                                </div>
                                <div className="center_post-post-info-name-musie">
                                    <h6>{props.aritstName},{props.musicName},(From "{props.movieName}")</h6>
                                </div>
                            </div>    
                            <div className="center_post-post-info-more">
                                <h3>...</h3>
                            </div>    
                        </div>

                    </div>

                    <div className="center_post-post-contant">
                        <img src={props.profilImg} alt="SOME POST HEAR"/>
                    </div>
                    
                    <div className="footer">

                    </div>
                </div>

            </div>

        </div>

    )
   
}


export default Center
