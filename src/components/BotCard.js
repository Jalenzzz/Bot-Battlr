import React from "react";

// Define classes for different bot types
const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

// Component for rendering a single bot card
function BotCard({ bot, action, removeCard }) {
  // Function to handle adding a bot to the army
  function handleAddArmy(e) {
    action(bot);
  }

  // Function to handle removing a bot from the army
  function handleRemoveArmy(e) {
    removeCard(bot);
  }
  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={handleAddArmy}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini red button" onClick={handleRemoveArmy}>
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
