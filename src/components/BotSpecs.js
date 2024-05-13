import React from "react";
const BotSpecs = ({ botAvatars, bots, goBack }) => {
  return (
    <div className="bot-specs">
      <h2>Bot Specs</h2>
      <div className="bot-identity">
        <img src={bots.avatar_url} alt={bots.name} />
        <div className="bot-info">
          <h3>{bots.name}</h3>
          <p>Health: {bots.health}</p>
          <p>Damage: {bots.damage}</p>
          <p>Armor: {bots.armor}</p>
          <button onClick={goBack}>Back to List</button>
          <button onClick={() => enlistBot(bots)}>Enlist</button>
        </div>
      </div>
    </div>
  );
};

export default BotSpecs;