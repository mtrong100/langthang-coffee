import React from "react";
import user from "../assets/images/me.jpg";
import { useAvatar } from "../context/avatar-context";

const UserPage = () => {
  const { imageSrc, handleFileInputChange } = useAvatar();
  return (
    <section className="pt-32 py-20 md:pt-[150px]">
      <div className="flex flex-col items-center justify-center gap-10 page-container">
        <div className="w-[250px] h-[250px] flex justify-center items-center border-[6px] border-solid border-primary rounded-full">
          <img
            className="rounded-full img-cover"
            src={imageSrc || user}
            alt="user-avatar"
          />
        </div>
        <input
          className="hidden"
          id="change-avt"
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
        />
        <label
          className="inline-flex items-center justify-center px-10 py-4 font-semibold text-black uppercase rounded-lg cursor-pointer bg-primary"
          htmlFor="change-avt"
        >
          Change Profile
        </label>
      </div>
    </section>
  );
};

export default UserPage;
