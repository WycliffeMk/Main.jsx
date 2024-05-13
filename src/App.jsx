import { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection/BotCollection.jsx';
import YourBotArmy from './components/YourBotArmy/YourBotArmy.jsx';
import SortBar from './components/SortBar/SortBar.jsx';
import BotSpecs from './components/BotSpecs/BotSpecs.jsx';

const App = () => {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('/bots'); 
      if (!response.ok) {
        throw new Error('Failed to fetch bots');
      }
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error(error);
    }
  };

  const enlistBot = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  const dischargeBot = async (botId) => {
    try {
      const response = await fetch(`/bots/${botId}, {
        method: 'DELETE',
      }`);
      if (!response.ok) {
        throw new Error('Failed to discharge bot');
      }
      setArmy(army.filter(b => b.id !== botId));
    } catch (error) {
      console.error(error);
    }
  };

  const sortBots = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => {
      return a[criteria] - b[criteria];
    });
    setBots(sortedBots);
  };

  const enlistOneBotFromClass = (botClass) => {
    const availableBotsFromClass = bots.filter(bot => bot.bot_class === botClass && !army.some(b => b.id === bot.id));
    if (availableBotsFromClass.length > 0) {
      enlistBot(availableBotsFromClass[0]);
    } else {
      console.log(`No available bot from class ${botClass}`);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <SortBar sortBots={sortBots} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy army={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      {selectedBot && (
        <BotSpecs bot={selectedBot} enlistBot={enlistBot} goBack={() => setSelectedBot(null)} />
      )}
      <div>
        <button onClick={() => enlistOneBotFromClass("Support")}>Enlist Support Bot</button>
        <button onClick={() => enlistOneBotFromClass("Medic")}>Enlist Medic Bot</button>
        <button onClick={() => enlistOneBotFromClass("Assault")}>Enlist Assault Bot</button>
        <button onClick={() => enlistOneBotFromClass("Defender")}>Enlist Defender Bot</button>
        <button onClick={() => enlistOneBotFromClass("Captain")}>Enlist Captain Bot</button>
        <button onClick={() => enlistOneBotFromClass("Witch")}>Enlist Witch Bot</button>
      </div>
    </div>
  );
};

export default App;