import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-between items-center p-3  h-20 w-full border-b-2 border-slate-400">
      <div className="flex space-x-4">
        <h1 className="font-bold">
          Work History <span className="text-[#CBD8E9]"> | </span>{" "}
        </h1>
        <div
          onClick={() => setActiveTab("completed")}
          className={`cursor-pointer ${
            activeTab === "completed"
              ? "text-black border-b-2 border-[#6366F1] "
              : "text-[#CBD8E9]"
          }`}
        >
          Completed
        </div>
        <div
          onClick={() => setActiveTab("in Review")}
          className={`cursor-pointer ${
            activeTab === "in Review"
              ? "text-black border-b-2 border-[#6366F1]"
              : "text-[#CBD8E9]"
          }`}
        >
          {" "}
          In Review
        </div>
      </div>

      <div className="flex items-center px-5">
        |
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-5 mr-2"
        >
          <path
            d="M0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790176 1.13968 0 0.948912 0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0ZM3 4.75C3 4.55109 3.07902 4.36032 3.21967 4.21967C3.36032 4.07902 3.55109 4 3.75 4H12.25C12.4489 4 12.6397 4.07902 12.7803 4.21967C12.921 4.36032 13 4.55109 13 4.75C13 4.94891 12.921 5.13968 12.7803 5.28033C12.6397 5.42098 12.4489 5.5 12.25 5.5H3.75C3.55109 5.5 3.36032 5.42098 3.21967 5.28033C3.07902 5.13968 3 4.94891 3 4.75ZM6 8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8H9.25C9.44891 8 9.63968 8.07902 9.78033 8.21967C9.92098 8.36032 10 8.55109 10 8.75C10 8.94891 9.92098 9.13968 9.78033 9.28033C9.63968 9.42098 9.44891 9.5 9.25 9.5H6.75C6.55109 9.5 6.36032 9.42098 6.21967 9.28033C6.07902 9.13968 6 8.94891 6 8.75Z"
            fill="#94A3B8"
          />
        </svg>
        <p className="mr-5">Filter By</p>
        <form>
          <select className="bg-transparent border rounded-md w-[152px] h-[34px] border-[#EBEBEB] text-[#6366F1] ">
            <option selected>All</option>
            <option value="content">content</option>
            <option value="design">design</option>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="blockchain">blockchain</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Tabs;
