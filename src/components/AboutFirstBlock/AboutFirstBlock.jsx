import { AboutHard } from "../../Pages/About/AboutHardCode";
import { imgs } from "../../images/img";
import "./aboutFirstBlock.css"

const AboutFirstBlock = () => {

    // AboutHard
  return (
    <section className="advantages container">
      <div className="advantages__container _container">
        <img src={imgs.aboutImg} alt="" className="aboutImg" />
        <div className="advantages__right">
          <span className="title-span">
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5381 1.89423H10.5958C9.14576 1.89423 7.97461 3.06538 7.97461 4.51538V4.96153C7.97461 5.24038 8.14192 5.40769 8.42076 5.40769H21.0804C22.5304 5.40769 23.7015 6.57884 23.7015 8.02884V21.5808C23.7015 21.8596 23.8688 22.0269 24.1477 22.0269H24.5381C25.9881 22.0269 27.1592 20.8558 27.1592 19.4058V4.51538C27.1592 3.06538 25.9881 1.89423 24.5381 1.89423Z"
                fill="#FFB342"
              />
              <path
                d="M18.4043 8.02884H4.46197C3.01197 8.02884 1.84082 9.19999 1.84082 10.65V25.4846C1.84082 26.9346 3.01197 28.1058 4.46197 28.1058H18.4043C19.8543 28.1058 21.0254 26.9346 21.0254 25.4846V10.65C21.0812 9.19999 19.8543 8.02884 18.4043 8.02884ZM17.2889 15.4461L10.5966 22.1385C10.3177 22.4173 10.0389 22.5288 9.70428 22.5288C9.42544 22.5288 9.03505 22.4173 8.81197 22.1385L5.57736 18.9038C5.29851 18.625 5.29851 18.2346 5.57736 18.0115L6.46967 17.1192C6.74851 16.8404 7.1389 16.8404 7.36197 17.1192L9.70428 19.4615L15.4485 13.7173C15.7274 13.4385 16.1177 13.4385 16.3408 13.7173L17.2331 14.6096C17.512 14.7769 17.512 15.2231 17.2889 15.4461Z"
                fill="#FFB342"
              />
            </svg>
            Ինչու՞ ընտրել մեզ
          </span>
          <h2>Մի քանի պատճառ, թե ինչու դուք պետք է ընտրեք մեզ</h2>
          {
            AboutHard.map((el) => {
                return (
                  <div key={el.id} className="advantages__item">
                    <div className="icon">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="16" cy="16" r="16" fill="#FFB342" />
                        <path
                          d="M23 11L13.9 22L10 17.875"
                          stroke="#1C2752"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text">
                      <p>{el.title}</p>
                      <span>{el.text}</span>
                    </div>
                  </div>
                );
            })
          }
          
          {/* <div className="advantages__item">
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FFB342" />
                <path
                  d="M23 11L13.9 22L10 17.875"
                  stroke="#1C2752"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <p>Արագ Սպասարկում</p>
              <span>Поставки металлопроката напрямую по Москве и МО</span>
            </div>
          </div>
          <div className="advantages__item">
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FFB342" />
                <path
                  d="M23 11L13.9 22L10 17.875"
                  stroke="#1C2752"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <p>Гибкая оплата</p>
              <span>Удобные варианты оплаты для частных и юридических лиц</span>
            </div>
          </div>
          <div className="advantages__item">
            <div className="icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#FFB342" />
                <path
                  d="M23 11L13.9 22L10 17.875"
                  stroke="#1C2752"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text">
              <p>Собственный металлообрабатывающий цех</p>
              <span>Очистка | Резка | Обработка</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutFirstBlock;
