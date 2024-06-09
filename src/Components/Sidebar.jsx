import React from "react";


const Sidebar = () => {
  return (
    <div className="p-5 relative w-[412px] h-14">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 relative top-10 left-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

      <input
        placeholder="Search Bounties, Profiles, and more..."
        className="h-14 w-96 bg-babyBlue rounded-full pl-14 border border-none"
      />
    </div>
  );
};

export default Sidebar;
