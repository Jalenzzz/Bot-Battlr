import React from "react";
import BotCard from "./BotCard";

// Component for rendering the user's bot army
function YourBotArmy({ bots, action, removeCard }) {
  // Render the bot army

  return (
    <div className="ui segment inverted olive bot-army">
      {/* Grid layout for bot army */}
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* Title for the bot army */}
          Your Bot Army
          {/* Map over each bot in the army and render a BotCard */}
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
