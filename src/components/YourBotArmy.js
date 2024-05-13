const YourBotArmy = ({ army }) => {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        <div className="bot">
          {army.map(bot => (
            <div key={bot.id} className="bot-slate">
              <img src={bot.avatar_url} alt={bot.name} />
              <div className="botInfo">
                <h3>{bot.name}</h3>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <button onClick={() => releaseBot(bot)}>Release</button>
                <button onClick={() => dischargeBot(bot.id)}>Discharge</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default YourBotArmy;