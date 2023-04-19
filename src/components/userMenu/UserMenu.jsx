import React from "react";
import { NavLink } from "react-router-dom";

const UserMenu = ({ settings }) => {
  const { userName, userId, smallNav } = settings;
  return (
    <div className="user-triangle bg-productColor z-50 rounded-md shadow-lg min-w-[200px] md:min-w-[250px] font-secondary absolute top-[70px] -translate-x-2/4 pt-4">
      {/* user-info */}
      <div className="pb-2 text-center border-b-2 border-solid border-primary">
        <h1 className="font-medium text-primary">{userName}</h1>
        <span className="text-xs font-medium">{userId}</span>
      </div>

      {/* user-settings */}
      <ul className="flex flex-col items-center justify-center">
        {smallNav.map((item) => {
          const { id, name, path } = item;
          return (
            <NavLink
              to={path}
              className="w-full px-5 py-4 text-xs font-medium text-center transition-all md:text-sm hover:text-primary hover:bg-black hover:bg-opacity-50"
              key={id}
            >
              {name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default UserMenu;
