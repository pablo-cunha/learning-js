import react from "react";

function Bio () {
    return (
        <div className="bio-container">
            <div className="bio-main">
            <img className="bio-img"
            src="https://avatars.githubusercontent.com/u/79881760?v=4" 
            alt="dev-photo"/>
            <p> Blog pessoal por <strong className="hyper-text">Pablo Cunha</strong>
            <br/>
            Sempre aprendendo e tentando ensinar !
            </p>
            </div>
        </div>
    )
}

export default Bio
