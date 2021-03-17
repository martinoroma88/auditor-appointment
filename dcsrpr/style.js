const style = `
<style>
#decision-report {
  --q1: 7;
  --q2: 15;
  --q3: 21;
  --q4: 50;
  --color: black;
  --bg: white;
  --accent: green;
  --warning: red;
  font-family: inherit; }


/* Reset */

#decision-report * {
  margin: 0;
  padding: 0;
  box-sizing: border-box; }


/* Layout */

#decision-report .dr__row__2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: calc(var(--q2) * 1px);
  margin-bottom: calc(var(--q4) * 1px); }


#decision-report .dr__row__3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: calc(var(--q2) * 1px);
  margin-bottom: calc(var(--q4) * 1px); }

#decision-report .dr__row__4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: calc(var(--q2) * 1px);
  margin-bottom: calc(var(--q4) * 1px); }


/* Inputs */

#decision-report input:not([type="checkbox"]):not([type="radio"]), #decision-report input[type="date"], #decision-report select, #decision-report textarea {
  font-size: 1em;
  display: block;
  padding: calc(var(--q1) * 1px);
  font-family: inherit;
  width: 100%; }

#decision-report input[type="checkbox"] {
  margin-right: calc(var(--q1) * 1px); }

#decision-report input[readonly] { 
  background-color: #f8f8f8; }


/* Typography */

#decision-report label:not(.dr__simplelabel) {
  display: block;
  font-family: inherit;
  margin-bottom: calc(var(--q1) * 1px);
  font-weight: bold; }

#decision-report .alone { grid-column: span 2; }

#decision-report p { padding-top: calc(var(--q1) * 1px); }

#decision-report h2 { padding-bottom: calc(var(--q2) * 1px); font-size: 21px; font-weight: bold; }
</style>
`;

export default style;
