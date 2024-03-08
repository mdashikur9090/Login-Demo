import React, { useState, useEffect } from "react";
import { errorToast, successToast } from "../toast";
import ApiProvider, { SUCCESS } from "../api/ApiRequest";

function Home() {
  const [matches, setMatches] = useState([]);
  const [interests, setInterests] = useState(["Animals", "Natures"]);
  const [interest, setInterest] = useState("");

  useEffect(() => {
    getMatches();
    getInterests();
  }, []);

  const getMatches = async () => {
    const response = await ApiProvider.getRequest("matches");
    if (response?.status == SUCCESS) {
      setMatches(response.data);
    }
  };

  const getInterests = async () => {
    const response = await ApiProvider.getRequest("interests");
    if (response?.status == SUCCESS) {
      setInterests(response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      interest: interest,
    };

    const response = await ApiProvider.postRequest("interest", params);
    if (response?.status == SUCCESS) {
      successToast(response.message);
    }
    // else {
    //   errorToast(response.message);
    // }

    //this api is not exist that why i push the interest manually to the viriable to display the result
    setInterests([...interests, interest]);
    setInterest("");
  };

  return (
    <div className="maincontainer">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Home</h2>

          <h2>Interest List</h2>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>

          <div className="form-group">
            <label>Interest:</label>
            <input
              type="text"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
