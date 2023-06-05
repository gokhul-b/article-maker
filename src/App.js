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
  };
  return (
    <div>
      <form>
        <div>
          <div>
            <input
              type="text"
              placeholder="player name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="last match score"
              value={lastMatchScore}
              onChange={(e) => setlastMatchScore(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="batsmanPosition">Batsman Postion : </label>
            <select
              name="batsmanPosition"
              id=""
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Opening batsman">Opening batsman</option>
              <option value="One Down batsman">One Down batsman</option>
              <option value="2nd down batsman">2nd down batsman</option>
              <option value="3rd down batsman">3rd down batsman</option>
              <option value="4th down batsman">4th down batsman</option>
              <option value="5th down batsman">5th down batsman</option>
              <option value="Lower order batsman">Lower order batsman</option>
            </select>
          </div>
          <div>
            <label htmlFor="batsmanPosition">Run Scoring Style : </label>
            <select
              name="batsmanPosition"
              id=""
              value={scoringStyle}
              onChange={(e) => setScoringStyle(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Quick run scorer">Quick run scorer</option>
              <option value="Attacking Batsman">Attacking Batsman</option>
              <option value="Average Batsman">Average Batsman</option>
              <option value="Slow run scorer">Slow run scorer</option>
            </select>
          </div>
          <div>
            <label htmlFor="batsmanPosition">Bowling Style : </label>
            <select
              name="batsmanPosition"
              id=""
              value={bowlingStyle}
              onChange={(e) => setBowlingStyle(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Right Arm Fast Bowler">
                Right Arm Fast Bowler
              </option>
              <option value="Left Arm Fast Bowler">Left Arm Fast Bowler</option>
              <option value="Leg Spinner">Leg Spinner</option>
              <option value="Spinner">Spinner</option>
            </select>
          </div>
          <div>
            <label htmlFor="batsmanPosition">Bowler's Spell : </label>
            <input
              type="number"
              placeholder="over"
              value={spell}
              onChange={(e) => setSpell(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="batsmanPosition">Wickets in Last Match : </label>
            <input
              type="number"
              placeholder="last match wicket"
              value={wickets}
              onChange={(e) => setWickets(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="batsmanPosition">Player's Form : </label>
            <select
              name="batsmanPosition"
              id=""
              value={lastmatchform}
              onChange={(e) => setLastmatchform(e.target.value)}
            >
              <option value="">Select</option>
              <option value="He is in Good Form">He is in Good Form</option>
              <option value="He is in Good Form">He is in Out of form</option>
            </select>
          </div>
          <div>
            <label htmlFor="batsmanPosition">Role in Fantasy Team : </label>
            <select
              name="batsmanPosition"
              id=""
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Best choice for captain & vice captain">
                Best choice for captain & vice captain
              </option>
              <option value="Keep in only Grand league team">
                Keep in only Grand league team
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="batsmanPosition">Selection Percentage : </label>
            <select
              name="batsmanPosition"
              id=""
              value={selectionpercentage}
              onChange={(e) => setSelectionpercentage(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Less selection percentage good pick for mega contest">
                Less selection percentage good pick for mega contest
              </option>
            </select>
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            Get Data
          </button>
        </div>
      </form>
      <button onClick={handleAddAnother}>Add another</button>
      <button onClick={handleNewForm}>New Form</button>
      <div>
        <ul>
          {result.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
