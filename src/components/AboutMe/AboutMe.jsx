import { imgs } from "../../images/img";
import "./aboutMe.css"

const AboutMe = () => {
    return (
      <div className="aboutMe">
        <div className="container">
          <div className="aboutTitle">
            <div className="aboutInfo">
              <h1>Մեր Մասին</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo facilis nisi autem magnam a alias iste esse, Explicabo
                facilis nisi autem magnam a alias iste esse, Explicabo facilis
                nisi autem magnam a alias iste esse, Explicabo facilis nisi
                autem magnam a alias iste esse, Explicabo facilis nisi autem
                magnam a alias iste esse, agnam a alias iste esse, Explicabo
                facilis nisi autem magnam a alias iste esse, Explicabo facilis
                nisi autem magnam a alias iste esse, Explicabo facilis nisi
                autem magnam a alias iste esse, agnam a alias iste esse,
                Explicabo facilis nisi autem magnam a alias iste esse, Explicabo
                facilis nisi autem magnam a alias iste esse, Explicabo facilis
                nisi autem magnam a alias iste esse,agnam a alias iste esse,
                Explicabo facilis nisi autem magnam a alias iste esse, Explicabo
                facilis nisi autem magnam a alias iste esse, Explicabo facilis
                nisi autem magnam a alias iste esse, Explicabo facilis nisi
                autem magnam a alias iste esse, consectetur, nulla ut sint
                distinctio. Tenetur vitae fugit eius minima ex iure dolores
                asperiores a praesentium totam neque mollitia earum, eveniet
                cupiditate, quidem, doloremque provident reiciendis. Aspernatur
                atque est sed beatae ratione maxime.
              </p>
            </div>
            <img src={imgs.aboutMeImg} alt="" />
          </div>
        </div>
      </div>
    );
}

export default AboutMe;