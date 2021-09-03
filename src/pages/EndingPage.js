import React, { useEffect } from "react";
import { FishTankLink, PlayAgainButton, FishPreviewSliders, FishResult } from "../index.js";
import {InitFirestore} from '../backend/FirebaseLink.js'
const EndingPage = ({ name, froshGroup, fishType, restartGame }) => {

  useEffect(()=> {
    
  }, [])

  return (
    <div class='columns is-centered is-moblie'>
      <div class="column m-5 is-three-quarters block has-text-centered">
        <h1 class="is-size-1 has-text-black is-spark-font">Game Over</h1>
        <h4 class="subtitle">Congratulations, {name}.</h4>
        <h4 class="subtitle">You earned {froshGroup} a {fishType}!</h4>
        <FishResult />
        <div class='columns is-centered is-moblie'>
          <div class="column">
            <FishTankLink />
          </div>
          <div class="column">
            <FishPreviewSliders />
          </div>
        </div>
        <button onClick={() => InitFirestore(froshGroup, fishType)} > do aws stuff </button>
        <PlayAgainButton restartGame={restartGame} />
      </div >
    </div >
  );
};

export default EndingPage;