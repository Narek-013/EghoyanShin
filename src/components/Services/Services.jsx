import { Link } from "react-router-dom";
import { ServiceItems } from "./HardCodeService";
import "./services.css";

const Services = () => {
  return (
    <section className="services">
      <div className="services__container container">
        <div className="services__title">
          <span className="title-span">
            <svg
              width="48"
              height="47"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9296 3.41377C12.3698 3.14311 12.8746 3 13.3893 3C13.904 3 14.4089 3.14311 14.849 3.41377L21.4216 7.45628C21.8357 7.71096 22.1782 8.0697 22.4159 8.49786C22.6537 8.92602 22.7786 9.40915 22.7786 9.90059V10.6171C22.7786 10.8698 22.6797 11.1122 22.5036 11.2909C22.3276 11.4696 22.0887 11.5699 21.8397 11.5699C21.5907 11.5699 21.3519 11.4696 21.1758 11.2909C20.9997 11.1122 20.9008 10.8698 20.9008 10.6171V9.90059C20.9009 9.73668 20.8594 9.57549 20.7803 9.43261C20.7011 9.28973 20.5869 9.17 20.4488 9.08498L13.8763 5.04374C13.7295 4.95335 13.561 4.90556 13.3893 4.90556C13.2176 4.90556 13.0492 4.95335 12.9023 5.04374L6.3298 9.08498C6.1917 9.17 6.07755 9.28973 5.99838 9.43261C5.91921 9.57549 5.8777 9.73668 5.87786 9.90059V16.4154C5.8777 16.5793 5.91921 16.7405 5.99838 16.8833C6.07755 17.0262 6.1917 17.146 6.3298 17.231L11.3725 20.3308C11.478 20.3957 11.5698 20.4811 11.6428 20.582C11.7157 20.6829 11.7684 20.7974 11.7977 20.919C11.8271 21.0405 11.8326 21.1668 11.8138 21.2905C11.7951 21.4142 11.7526 21.533 11.6886 21.64C11.6246 21.747 11.5405 21.8402 11.4411 21.9143C11.3417 21.9883 11.2288 22.0417 11.109 22.0715C10.9892 22.1013 10.8648 22.1069 10.7429 22.0879C10.621 22.0689 10.504 22.0257 10.3985 21.9608L5.35707 18.8609C4.94253 18.606 4.59982 18.2469 4.36209 17.8183C4.12435 17.3896 3.99964 16.906 4 16.4141V9.90059C4.00007 9.40915 4.12499 8.92602 4.3627 8.49786C4.60041 8.0697 4.94289 7.71096 5.35707 7.45628L11.9296 3.41377Z"
                fill="#FFB82B"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0835 12.3004L18.0847 12.2471V11.8837C18.0847 11.631 17.9858 11.3887 17.8097 11.21C17.6336 11.0313 17.3948 10.9309 17.1458 10.9309C16.8968 10.9309 16.6579 11.0313 16.4819 11.21C16.3058 11.3887 16.2069 11.631 16.2069 11.8837V12.2471L16.2081 12.3004C15.6192 12.4218 15.059 12.6573 14.5581 12.9941C14.5459 12.981 14.5334 12.9683 14.5205 12.956L14.2689 12.6981C14.0909 12.5298 13.8555 12.4381 13.6122 12.4425C13.369 12.4469 13.1369 12.5469 12.9649 12.7214C12.7929 12.896 12.6943 13.1315 12.69 13.3784C12.6857 13.6252 12.776 13.8641 12.9419 14.0447L13.1935 14.3026L13.2311 14.3382C12.9056 14.8388 12.6677 15.4054 12.5463 16.0139C12.5296 16.0131 12.5129 16.0127 12.4962 16.0126H12.1382C11.8891 16.0126 11.6503 16.113 11.4742 16.2917C11.2981 16.4704 11.1992 16.7127 11.1992 16.9655C11.1992 17.2182 11.2981 17.4605 11.4742 17.6392C11.6503 17.8179 11.8891 17.9183 12.1382 17.9183H12.4962L12.5438 17.917C12.6652 18.5268 12.9018 19.0934 13.2286 19.594C13.2166 19.6051 13.2049 19.6165 13.1935 19.6283L12.9406 19.8849C12.7748 20.0655 12.6845 20.3044 12.6888 20.5513C12.6931 20.7981 12.7916 21.0336 12.9636 21.2082C13.1357 21.3828 13.3677 21.4828 13.611 21.4871C13.8542 21.4915 14.0897 21.3999 14.2676 21.2316L14.5218 20.9749C14.5325 20.9642 14.5429 20.9532 14.5531 20.9419C15.0476 21.2735 15.6072 21.5136 16.2081 21.6381L16.2069 21.6838V22.0472C16.2069 22.2999 16.3058 22.5422 16.4819 22.7209C16.6579 22.8996 16.8968 23 17.1458 23C17.3948 23 17.6336 22.8996 17.8097 22.7209C17.9858 22.5422 18.0847 22.2999 18.0847 22.0472V21.6838V21.6381C18.6856 21.5149 19.244 21.2735 19.7372 20.9419L19.7698 20.9749L20.0227 21.2328C20.1998 21.4063 20.4371 21.5022 20.6832 21.4999C20.9294 21.4977 21.1649 21.3973 21.3389 21.2206C21.5129 21.0439 21.6115 20.8048 21.6135 20.555C21.6156 20.3052 21.5208 20.0645 21.3497 19.8849L21.0981 19.6283C21.0867 19.6169 21.075 19.6059 21.063 19.5952C21.3898 19.0934 21.6264 18.5255 21.7478 17.917H22.1534C22.4024 17.917 22.6413 17.8166 22.8173 17.6379C22.9934 17.4592 23.0924 17.2169 23.0924 16.9642C23.0924 16.7115 22.9934 16.4691 22.8173 16.2904C22.6413 16.1117 22.4024 16.0114 22.1534 16.0114H21.7954L21.7453 16.0139C21.6254 15.4158 21.3929 14.8469 21.0605 14.3382L21.0981 14.3026L21.351 14.046C21.5221 13.8664 21.6168 13.6257 21.6148 13.3759C21.6128 13.1261 21.5141 12.8871 21.3401 12.7103C21.1661 12.5336 20.9307 12.4332 20.6845 12.431C20.4383 12.4287 20.2011 12.5246 20.0239 12.6981L19.7698 12.9547L19.7335 12.9928C19.2325 12.6565 18.6722 12.4214 18.0835 12.3004ZM17.1458 14.1108C16.7757 14.1103 16.4092 14.1839 16.0673 14.3274C15.7253 14.4708 15.4146 14.6814 15.1529 14.9469C14.8912 15.2124 14.6838 15.5278 14.5424 15.8748C14.401 16.2218 14.3285 16.5937 14.329 16.9693C14.3285 17.3448 14.401 17.7167 14.5424 18.0637C14.6838 18.4108 14.8912 18.7261 15.1529 18.9916C15.4146 19.2572 15.7253 19.4677 16.0673 19.6112C16.4092 19.7546 16.7757 19.8282 17.1458 19.8277C17.5158 19.8282 17.8823 19.7546 18.2243 19.6112C18.5663 19.4677 18.877 19.2572 19.1387 18.9916C19.4003 18.7261 19.6078 18.4108 19.7492 18.0637C19.8906 17.7167 19.9631 17.3448 19.9626 16.9693C19.9631 16.5937 19.8906 16.2218 19.7492 15.8748C19.6078 15.5278 19.4003 15.2124 19.1387 14.9469C18.877 14.6814 18.5663 14.4708 18.2243 14.3274C17.8823 14.1839 17.5158 14.1103 17.1458 14.1108Z"
                fill="#FFB82B"
              />
            </svg>
            <h1>Մեր ծառայությունները</h1>
          </span>
        </div>
        <div className="services__grid">
          {ServiceItems.map((el) => {
            return (
              <div key={el.id} className="services__item">
                <span className="num">{el.id}</span>
                <h4>
                  <Link to={`${el.id}`}>{el.title}</Link>
                </h4>
                <p>{el.text}</p>
                <Link to={`${el.id}`} className="more">
                  Ավելի մանրամասն
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
