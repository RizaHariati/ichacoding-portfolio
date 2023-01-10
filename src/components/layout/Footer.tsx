import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <div className=" bg-accent w-full h-0.5 rounded-full mb-auto"></div>
      <div className="footer-content">
        <a href="https://www.freepik.com/pikisuperstar" className="footer-item">
          Background by pikisuperstar / Freepik *
        </a>
        <a
          href="https://www.vecteezy.com/free-vector/phone"
          className="footer-item"
        >
          &nbsp; Phone Vectors by Vecteezy
        </a>
        <div className="footer-item">
          <a target="_blank" href="https://icons8.com/icon/76948/cash">
            &nbsp; Cash
          </a>
          icon by
          <a target="_blank" href="https://icons8.com">
            Icons8
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
