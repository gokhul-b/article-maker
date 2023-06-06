import { useState } from "react";
import { clearContent, createContent } from "./CreateContent";

function App() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [lastMatchScore, setlastMatchScore] = useState("");
  const [bowlingStyle, setBowlingStyle] = useState("");
  const [scoringStyle, setScoringStyle] = useState("");
  const [spell, setSpell] = useState("");
  const [wickets, setWickets] = useState("");
  const [lastmatchform, setLastmatchform] = useState("");
  const [role, setRole] = useState("");
  const [selectionpercentage, setSelectionpercentage] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = {
      name: name,
      position: position,
      lastMatchScore: lastMatchScore,
      bowlingStyle: bowlingStyle,
      scoringStyle: scoringStyle,
      spell: spell,
      wickets: wickets,
      lastmatchform: lastmatchform,
      role: role,
      selectionpercentage: selectionpercentage,
    };
    const newResult = createContent(content);
    setResult([...result, newResult]);
  };

  const handleNewForm = (e) => {
    setName("");
    setPosition("");
    setlastMatchScore("");
    setBowlingStyle("");
    setScoringStyle("");
    setSpell("");
    setWickets("");
    setLastmatchform("");
    setRole("");
    setSelectionpercentage("");
    clearContent();
    setResult([]);
  };

  const handleAddAnother = (e) => {
    setName("");
    setPosition("");
    setlastMatchScore("");
    setBowlingStyle("");
    setScoringStyle("");
    setSpell("");
    setWickets("");
    setLastmatchform("");
    setRole("");
    setSelectionpercentage("");
    setResult([...result]);
  };

  return (
    <div>
      <form className="flex flex-col items-center mt-12">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <input
              type="text"
              placeholder="player name"
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="last match score"
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500"
              value={lastMatchScore}
              onChange={(e) => setlastMatchScore(e.target.value)}
            />
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-slate-400"
            >
              <option value="None">Select Batsman Postion</option>
              <option value="Opening batsman">Opening batsman</option>
              <option value="One Down batsman">One Down batsman</option>
              <option value="2nd down batsman">2nd down batsman</option>
              <option value="3rd down batsman">3rd down batsman</option>
              <option value="4th down batsman">4th down batsman</option>
              <option value="5th down batsman">5th down batsman</option>
              <option value="Lower order batsman">Lower order batsman</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              value={scoringStyle}
              onChange={(e) => setScoringStyle(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            >
              <option value="None">Select Run Scoring Style</option>
              <option value="Quick run scorer">Quick run scorer</option>
              <option value="Attacking Batsman">Attacking Batsman</option>
              <option value="Average Batsman">Average Batsman</option>
              <option value="Slow run scorer">Slow run scorer</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              value={bowlingStyle}
              onChange={(e) => setBowlingStyle(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            >
              <option value="None">Select Bowling Style</option>
              <option value="Right Arm Fast Bowler">
                Right Arm Fast Bowler
              </option>
              <option value="Left Arm Fast Bowler">Left Arm Fast Bowler</option>
              <option value="Leg Spinner">Leg Spinner</option>
              <option value="Spinner">Spinner</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              placeholder="Bowler's Spell (over)"
              value={spell}
              onChange={(e) => setSpell(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Wickets in Last Match"
              value={wickets}
              onChange={(e) => setWickets(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            />
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              placeholder="Player's Form"
              value={lastmatchform}
              onChange={(e) => setLastmatchform(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            >
              <option value="None">Select Player's Form</option>
              <option value="He is in Good Form">He is in Good Form</option>
              <option value="He is in Good Form">He is in Out of form</option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            >
              <option value="None">Select Role in Fantasy Team</option>
              <option value="Best choice for captain & vice captain">
                Best choice for captain & vice captain
              </option>
              <option value="Keep in only Grand league team">
                Keep in only Grand league team
              </option>
              <option value="None">None</option>
            </select>
          </div>
          <div>
            <select
              name="batsmanPosition"
              id=""
              value={selectionpercentage}
              onChange={(e) => setSelectionpercentage(e.target.value)}
              className="w-40 mx-6 sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-500 text-slate-400"
            >
              <option value="None">Selection Percentage</option>
              <option value="Less selection percentage good pick for mega contest">
                Less selection percentage good pick for mega contest
              </option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Data
        </button>
      </form>
      <div className="flex justify-center items-center my-6 space-x-6">
        <button
          onClick={handleAddAnother}
          className="self-auto w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add another
        </button>
        <button
          onClick={handleNewForm}
          className="w-48 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          New Form
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-3/4 bg-slate-500 px-6 py-6 mb-10">
          <ul>
            {result.map((result, index) => (
              <li key={index} className="mb-2">
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
