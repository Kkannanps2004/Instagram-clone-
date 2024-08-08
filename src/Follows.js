import React from "react";
import './Follows.css'

const Follows = () =>{
    return(
        <div className="follows">
            <div className="follows_self">
                <div className="follows_self-profil_pic  follows-profil_pic">
                    <img src="/images/water1.jpg" alt="img"/>
                </div>
                <div className="follows_self-info follows-info" >
                    <h4>props.NameN</h4>
                    <h5>Switch</h5>
                </div>
            </div>

            {/* --------------------------------------------------------------------- */}
            
            <div className="follows_suggested">
            

                <div className="follows_suggested-title">
                    <div className="follows_suggested-title-title">
                        <h4>Suggested for you</h4>
                    </div>
                    <div className="follows_suggested-title-seeAll">
                        <h4>See All</h4>
                    </div>
                </div>

                <div className="follows_suggested-follows">
                    <div className="follows_suggested-follows-profil_pic  follows-profil_pic">
                        <img src="/images/water2.jpg" alt="img"/>
                    </div>
                    <div className="follows_suggested-follows-info follows-info" >
                        <h4>props.NameN</h4>
                        <h5>Follow</h5>
                    </div>
                </div>
                <div className="follows_suggested-follows">
                    <div className="follows_suggested-follows-profil_pic  follows-profil_pic">
                        <img src="/images/water3.jpg" alt="img"/>
                    </div>
                    <div className="follows_suggested-follows-info follows-info" >
                        <h4>props.NameN</h4>
                        <h5>Follow</h5>
                    </div>
                </div>
                <div className="follows_suggested-follows">
                    <div className="follows_suggested-follows-profil_pic  follows-profil_pic">
                        <img src="/images/water4.jpg" alt="img"/>
                    </div>
                    <div className="follows_suggested-follows-info follows-info" >
                        <h4>props.NameN</h4>
                        <h5>Follow</h5>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Follows