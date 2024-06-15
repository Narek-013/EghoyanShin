import { useParams } from "react-router-dom";
import { ServiceItems } from "./HardCodeService";

const ServiceId = () => {

    const {id} = useParams();
    const item = ServiceItems.filter(el => el.id == id)

    return (
      <div className="container">
        {
          item.map((el) => {
            return (
              <div key={el.id}>
                <h1>{el.id}</h1>
                <p>{el.title}</p>
                <p>{el.text}</p>
                <p>sax araca routing stex sksi</p>
              </div>
            );
          })
        }
      </div>
    );
}

export default ServiceId;
