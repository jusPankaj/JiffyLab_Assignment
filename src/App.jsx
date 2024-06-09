import "./App.css";
import HackathonCards from "./Components/HackathonCards";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import logo from "./assets/logo.png";
import img1 from "./assets/cardImage1.png";
import img2 from "./assets/cardImage2.png";
import img3 from "./assets/cardImage3.png";
import img4 from "./assets/cardImage4.png";
import Tabs from "./Components/Tabs";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("completed");

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Blockchain",
      link: "/blockchan",
      dropdown: [
        { name: "Proof Of Stake", link: "/PoS" },
        { name: "Proof of Work", link: "/PoW" },
      ],
      isDropdown: true,
      dropdownIcon: "dropdown.png",
    },
    {
      name: "Developers",
      link: "/devs",
      dropdown: [
        { name: "Mobile Devs", link: "/mobiledevs" },
        { name: "Web Devs", link: "webdevs" },
        { name: "Web App Devs", link: "WebApp Devs" },
      ],
      isDropdown: true,
      dropdownIcon: "dropdown.png",
    },
    {
      name: "More",
      link: "/more",
      dropdown: [
        { name: "Solana", link: "/solana" },
        { name: "Ethereum", link: "/ethereum" },
      ],
      isDropdown: true,
      dropdownIcon: "dropdown.png",
    },
    { name: "About 4337", link: "/about4337" },
  ];

  const completedCards = [
    {
      imageSrc: img1,
      title: "Write a thread with memes for PP Program on Solana",
      byName: "pSTAKE Finance",
      coins: "700",
      rank: "1st",
      keyword: ["Design"],
    },
    {
      imageSrc: img2,
      title: "Armada UI/UX Review",
      byName: "dean's List Dao",
      coins: "",
      rank: "",
      keyword: ["Design"],
    },
    {
      imageSrc: img2,
      title: "Design Earn's Talent Leaderboard",
      byName: "Superteam",
      coins: "500",
      rank: "1st",
      keyword: ["Frontend", "Backend", "Blockchain"],
    },
    {
      imageSrc: img3,
      title: "Create a Frame for Farcaster",
      byName: "Deribet",
      coins: "100",
      rank: "3rd",
      keyword: ["Content"],
    },
  ];

  const inReviewCards = [
    {
      imageSrc: img3,
      title: "Write a thread with memes for PP Program on Solana",
      byName: "pSTAKE Finance",
      keyword: ["Content"],
    },
    {
      imageSrc: img2,
      title: "Armada UI/UX Review",
      byName: "dean's List Dao",
      keyword: ["Design"],
    },
    {
      imageSrc: img1,
      title: "Design Earn's Talent Leaderboard",
      byName: "Superteam",
      keyword: ["Design"],
    },

    {
      imageSrc: img2,
      title: "Create a Frame for Farcaster",
      byName: "Deribet",
      keyword: ["Frontend", "Backend", "Blockchain"],
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-16 box-border">
      <div className="w-full max-w-screen text-slate-400">
        <Navbar logoImage={logo} navItems={navItems} />
      </div>

      <div className="flex w-full h-screen m-6">
        <div className="w-7/10 border-r-2 border-slate-400 ">
          <div className="pr-8 ">
            <div>
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

              {activeTab === "completed" &&
                completedCards.map((card, index) => (
                  <HackathonCards
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    byName={card.byName}
                    coins={card.coins}
                    rank={card.rank}
                    keyword={card.keyword}
                  />
                ))}

              {activeTab === "in Review" &&
                inReviewCards.map((card, index) => (
                  <HackathonCards
                    key={index}
                    imageSrc={card.imageSrc}
                    title={card.title}
                    byName={card.byName}
                    keyword={card.keyword}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="w-3/10">
          <Sidebar />
        </div>
      </div>

      {/* <div className="flex flex-col items-center w-[1080px] pt-4 "></div> */}
      {/* <Sidebar /> */}
    </div>
  );
};

export default App;
