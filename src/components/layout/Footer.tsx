import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="absolute bottom-0 h-8 sm:h-6 text-xs leading-3 flex flex-col sm:flex-row items-center justify-center text-center  bg-accent left-0 w-full z-10 font-thin">
      <a href="https://www.freepik.com/pikisuperstar">
        Background by pikisuperstar / Freepik *
      </a>
      <a href="https://www.vecteezy.com/free-vector/phone">
        &nbsp; Phone Vectors by Vecteezy
      </a>
    </div>
  );
};

export default Footer;
