let result = [];
export function clearContent() {
  result = [];
}
export function createContent(content) {
  result = [];
  let paragrah = `Player Name: ${content.name},
   Batting Position: ${content.position},
   Last Match Score: ${content.lastMatchScore},
   Batting Style: ${content.scoringStyle},
   Bowling Style: ${content.bowlingStyle},
   Overs Bowled: ${content.spell},
   Wickets Taken: ${content.wickets},
   Form: ${content.lastmatchform},
   Captaincy Recommendation: ${content.role},
   Selection Percentage: ${content.selectionpercentage}.`;
  // console.log(paragrah);
  result.push(paragrah);
  console.log(result);
  return result;
}
