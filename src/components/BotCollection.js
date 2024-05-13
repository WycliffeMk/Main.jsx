import React from 'react';
import BotSpecs from './BotSpecs';

const BotCollection = ({ enlistBots, setSelectedBots, BotCard }) => {

  const botAvatars = {
    101: "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1",
    102: "https://robohash.org/quidemconsequaturaut.png?size=300x300&set=set1",
    103: "https://robohash.org/idetcumque.png?size=300x300&set=set1",
    104: "https://robohash.org/corruptieaqueexcepturi.png?size=300x300&set=set1",
    105: "https://robohash.org/nisinequequas.png?size=300x300&set=set1",
    106: "https://robohash.org/etutprovident.png?size=300x300&set=set1",
    107: "https://robohash.org/accusantiumetfacilis.png?size=300x300&set=set1",
    108: "https://robohash.org/blanditiisautlaudantium.png?size=300x300&set=set1",
    109: "https://robohash.org/quirationerem.png?size=300x300&set=set1",
    110: "https://robohash.org/aperiametfuga.png?size=300x300&set=set1",
    111: "https://robohash.org/similiquereprehenderitet.png?size=300x300&set=set1",
    115: "https://robohash.org/consecteturveritatisid.png?size=300x300&set=set1",
  }
  const bots = [
    { id: 101, name: "wHz-93", health: 94, damage: 20, armor: 63, },
    { id: 102, name: "RyM-66", health: 86, damage: 36, armor: 77, },
    { id: 103, name: "P-24", health: 88, damage: 25, armor: 60, },
    { id: 104, name: "qq-69", health: 74, damage: 29, armor: 95, },
    { id: 105, name: "G`t-65", health: 62, damage: 98, armor: 31, },
    { id: 106, name: "TI-09", health: 81, damage: 39, armor: 52, },
    { id: 107, name: "XSf-63", health: 97, damage: 26, armor: 58, },
    { id: 108, name: "m-76", health: 65, damage: 90, armor: 38, },
    { id: 109, name: "hjk-40", health: 75, damage: 84, armor: 31, },
    { id: 110, name: "Nb-70", health: 64, damage: 86, armor: 28, },
    { id: 111, name: "ya-81", health: 56, damage: 22, armor: 92, },
    { id: 115, name: "qr-06", health: 92, damage: 37, armor: 57, },
  ];
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={{ ...bot, avatar_url: botAvatars[bot.id] }}
            enlistBot={enlistBots}
            setSelectedBot={setSelectedBots}
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;