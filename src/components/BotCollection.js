import React from "react";
import BotCard from "./BotCard";

// Component for rendering a collection of bots
function BotCollection({ botCollection, action, removeCard }) {
  // Render the collection of bots
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*Iterate over each bot in the collection and render a BotCard*/}
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
