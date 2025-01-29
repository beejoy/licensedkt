import MemberCard from "./components/MemberCard";
import licenseData from "./license.json";
import React, { useState } from "react";
import logo from "./assets/tmsodkt-logo.jpg";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [license, setLicense] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm.match(/[a-z]/)
      ? setLicense(
          licenseData.filter((data) =>
            data.NAME.toLowerCase().match(
              searchTerm.length > 0 ? searchTerm : "xiaomi"
            )
          )
        )
      : setLicense(licenseData.filter((data) => data.DLNO.match(searchTerm.length > 0 ? searchTerm : "xiaomi")));
    setSearchTerm("");
  };

  return (
    <>
      <div className="flex flex-col items-center mx-auto py-8 text-green-700 max-w-xs sm:max-w-xs">
        <img
          src={logo}
          alt="TMSO Dhankuta"
          className="rounded-full w-1/2 border-green-700 mb-8"
          width="160px"
          height="210px"
        />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mb-0 items-center w-full"
        >
          <input
            id="code-number"
            type="text"
            value={searchTerm}
            placeholder="Enter license number or name"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className="text-green-700 border-green-700 outline-green-700 outline-1 text-center px-5 py-2 rounded-md border w-full"
          />
          <button
            type="submit"
            className="bg-green-700 py-2 px-10 rounded-md text-white hover:outline-1 hover:outline-green-700/40 hover:bg-green-600 hover:shadow-md"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center mx-auto py-8 text-green-700 max-w-xs sm:max-w-xs md:max-w-2xl">
        {license && license.length > 0 ? (
          <>
            <div className="flex flex-col gap-y-3 w-full">
              <h2 className="text-center font-semibold mb-2">
                {license.length} {license.length === 1 ? "record" : "records"}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-between gap-y-4 sm:max-w-xs md:max-w-2xl">
              {license.map((data) => (
                <MemberCard data={data} key={data.ID} />
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;
