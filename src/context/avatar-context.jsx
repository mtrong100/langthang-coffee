import { createContext, useContext, useEffect, useState } from "react";

const AvatarContext = createContext();

const AvatarProvider = (props) => {
  const [imageSrc, setImageSrc] = useState("");

  // STORED AVATAR IN localStorage
  useEffect(() => {
    const avatarImage = localStorage.getItem("USER_AVATAR");
    if (avatarImage) {
      setImageSrc(avatarImage);
    }
  }, [imageSrc]);

  // HANDLE CHANGE AVATAR
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      localStorage.setItem("USER_AVATAR", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const value = { imageSrc, handleFileInputChange };
  return (
    <AvatarContext.Provider value={value} {...props}></AvatarContext.Provider>
  );
};

function useAvatar() {
  const context = useContext(AvatarContext);
  if (typeof context === "udefined")
    throw new Error("useAvatar must be used within AvatarProvider");
  return context;
}

export { useAvatar, AvatarProvider };
