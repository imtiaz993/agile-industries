import React from "react";
import Location from "../../../Assets/icons/blue-location.svg";
import Phone from "../../../Assets/icons/blue-phone.svg";
import Mail from "../../../Assets/icons/blue-mail.svg";

const Info = () => {
  return (
    <div className="grid md:grid-cols-3 gap-10">
      <div className="flex flex-col items-center">
        <img width="20px" src={Location} alt="" />
        <p className="mt-2 text-lg text-center text-[#666666]">
          wel street,park lon, USA
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img width="20px" src={Phone} alt="" />
        <p className="mt-2 text-lg text-center text-[#666666]">+234-5657865</p>
      </div>
      <div className="flex flex-col items-center">
        <img width="20px" src={Mail} alt="" />
        <p className="mt-2 text-lg text-center text-[#666666]">
          companyname@mail.com
        </p>
      </div>
    </div>
  );
};

export default Info;
