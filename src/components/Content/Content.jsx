import "./Content.css";
import avatar from "../../assets/images/avatar-michelle.jpg";
import share from "../../assets/images/icon-share.svg";
import fb from "../../assets/images/icon-facebook.svg";
import tw from "../../assets/images/icon-twitter.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import { useState } from "react";

const Content = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="content">
      <h1 className="title">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="desc">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <div className="user">
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="info">
          Michelle Appleton <span>28 Jun 2020</span>
        </div>
        <div
          className={`share-icon ${isShow ? "selected" : ""}`}
          onClick={() => setIsShow(!isShow)}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
              <path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" />
            </svg>
          </div>
          {isShow && (
            <div className="share-items">
              <p>Share</p>
              <img src={fb} alt="facebook" />
              <img src={tw} alt="twitter" />
              <img src={pin} alt="pinterest" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
