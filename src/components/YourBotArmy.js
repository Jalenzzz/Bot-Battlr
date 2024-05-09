import React from "react";
import BotCard from "./BotCard";
function YourBotArmy({ bots, action, removeCard }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {bots &&
            bots.map((bot) => {
              return (
                <BotCard
                  key={bot.id}
                  bot={bot}
                  action={action}
                  removeCard={removeCard}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
