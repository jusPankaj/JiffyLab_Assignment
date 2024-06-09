import React, { useState } from "react";
import img from "../assets/cardImage1.png";
import Avatar from "../assets/Avatar.png";

const Navbar = ({ logoImage, navItems }) => {
  const [dropdownVisible, setDropdownVisible] = useState({});
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const dropdownToggler = (index) => {
    setDropdownVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const profileMenu = [
    {
      imgSrc: "user.png",
      text: "View Profile",
    },
    {
      imgSrc: "dashboard.png",
      text: "Dashboard",
    },
    {
      imgSrc: "api.png",
      text: "API",
    },
    {
      imgSrc: "log-out.png",
      text: "Logout",
    },
  ];
  const imgPath = "/src/assets/";

  return (
    <nav>
      <div className="flex items-center justify-items-center w-screen h-20 relative top-5 mb-5">
        <img
          src={logoImage}
          className="w-[194px] h-[36px] relative mx-6"
          alt="image"
        />
        <ul className="flex gap-5">
          {navItems &&
            navItems.map((nav, index) => {
              // We can use either {} and return JSX statement or just () which implicitly return JSX
              return (
                <li key={index} className="p-3">
                  <a
                    href={nav.link}
                    onClick={(e) => {
                      if (nav.dropdown) {
                        e.preventDefault();
                        dropdownToggler(index);
                      }
                    }}
                    className="bg-[#5A5A62];
                    flex"
                  >
                    {nav.name}
                    {nav.isDropdown && (
                      <img src={`${imgPath}${nav.dropdownIcon}`} />
                    )}
                  </a>

                  {nav.dropdown && dropdownVisible[index] && (
                    <div className="absolute border border-slate-400">
                      <ul>
                        {nav.dropdown.map((dropdownItem, idx) => (
                          <li key={idx}>
                            <a href={dropdownItem.link}>{dropdownItem.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
        {/* <div className="flex mx-5  items-center"> */}
        <div className="flex items-center w-[360px] h-[40px]">
          <div className="flex items-center relative left-20 ">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[25px] h-[25px]"
            >
              <path
                opacity="0.2"
                d="M9.27087 23.4165L10.625 16.3481L5.20837 14.2276L14.6875 3.62488L13.3334 10.6933L18.75 12.8139L9.27087 23.4165Z"
                fill="#FFB300"
              />
              <path
                d="M19.7746 12.1463C19.7495 12.0349 19.6986 11.9318 19.6263 11.8461C19.554 11.7603 19.4627 11.6946 19.3604 11.6548L14.588 9.7783L15.8024 3.41072C15.8299 3.26277 15.8108 3.10946 15.7479 2.97392C15.685 2.83839 15.5817 2.72798 15.4537 2.65936C15.3256 2.59074 15.1798 2.56763 15.0381 2.59352C14.8965 2.6194 14.7667 2.69289 14.6684 2.80288L5.39039 13.223C5.31503 13.3063 5.26052 13.4078 5.23172 13.5185C5.20292 13.6292 5.20073 13.7456 5.22535 13.8574C5.24996 13.9692 5.30061 14.0729 5.37278 14.1592C5.44495 14.2455 5.53638 14.3117 5.63891 14.3519L10.4129 16.2284L9.20182 22.589C9.17432 22.7369 9.19347 22.8903 9.25639 23.0258C9.3193 23.1613 9.42257 23.2717 9.5506 23.3404C9.67862 23.409 9.82447 23.4321 9.96613 23.4062C10.1078 23.3803 10.2376 23.3068 10.3359 23.1968L19.6139 12.7767C19.6879 12.6934 19.7412 12.5924 19.7692 12.4825C19.7973 12.3726 19.7991 12.2571 19.7746 12.1463ZM10.9588 20.4676L11.8262 15.9192C11.8572 15.7579 11.8326 15.5903 11.7568 15.4462C11.6809 15.3021 11.5587 15.191 11.412 15.1325L7.03475 13.4088L14.0446 5.53643L13.1781 10.0848C13.1471 10.2461 13.1717 10.4138 13.2475 10.5578C13.3234 10.7019 13.4455 10.8131 13.5923 10.8715L17.9662 12.5909L10.9588 20.4676Z"
                fill="#FFB300"
              />
            </svg>
            <form>
              <select className="w-[25px] h-[25px] bg-transparent border-r">
                <option selected></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </select>
            </form>
          </div>
          <input
            placeholder="Search an userOp"
            className="w-[312px] h-10 rounded-3xl px-20 border border-grey-700 m-1 hover:border-[#195BDf] focus:outline-none focus-within:border-[#195BDf] hover:border-[2px]"
          />
        </div>

        <div className="">
          <div
            className="flex items-center cursor-pointer mx-15 px-4"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              src={Avatar}
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col px-4">
              <p className="font-medium text-black">Olivia Rhye</p>
              <p>olivia@jiffyscan.xyz</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-black py"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
        </div>
        {showProfileMenu && (
          <div className="absolute top-20 right-36 w-[208px] h-[161px] z-40 bg-white border border-#DADCE0 rounded-lg ">
            {profileMenu.map((item, index) => (
              <div
                key={index}
                className="flex py-[10px] px-4 w-[208px] h-[40px] text-[#5A5A62]"
              >
                <img
                  src={`${imgPath}${item.imgSrc}`}
                  alt={item.text}
                  className="pr-3"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
