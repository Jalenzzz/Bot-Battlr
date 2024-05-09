import React from "react";
import BotCard from "./BotCard";

function BotCollection({ botCollection, action, removeCard }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {botCollection &&
          botCollection.map((bot) => {
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
  );
}

export default BotCollection;
