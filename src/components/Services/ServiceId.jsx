import { useParams } from "react-router-dom";
import { ServiceItems } from "./HardCodeService";
import "./ServiceId.css"

const ServiceId = () => {

    const {id} = useParams();
    const item = ServiceItems.filter(el => el.id == id)

    return (
      <div className="container">
        {
          item.map((el) => {
            return (
              <div className="serviceId" key={el.id}>
                <p className="serviceTitle">{el.title}</p>
                <div className="imageAndTitle">
                  <img src={el.image} alt="services_img" />
                  <div className="textsDiv">
                    <p className="serviceText">{el.text}</p>
                    <p className="serviceText2">{el.text2}</p>
                    <p className="slogan">{el.text3}</p>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    );
}

export default ServiceId;
