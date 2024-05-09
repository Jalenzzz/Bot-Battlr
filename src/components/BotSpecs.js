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

// Component for displaying bot specifications
function BotSpecs({ bot, back, enlist }) {
  return (
    <div className="ui segment">
      {/* Grid for layout */}
      <div className="ui two column centered grid">
        <div className="row">
          {/* Bot image */}
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          {/* Bot information */}
          <div className="four wide column">
            {/* Bot name */}
            <h2>Name: {bot.name}</h2>
            {/* Bot catchphrase */}
            <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            {/* Bot class and icon */}
            <strong>
              Class: {bot.bot_class}
              <i className={botTypeClasses[bot.bot_class]} />
            </strong>
            <br />
            {/* Bot stats */}
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  {/* Health */}
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{bot.health}</strong>
                  </div>
                  {/* Damage */}
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{bot.damage}</strong>
                  </div>
                  {/* Armor */}
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{bot.armor}</strong>
                  </div>
                </div>
              </div>
            </div>
            {/* Button to go back */}
            <button className="ui button fluid" onClick={() => back()}>
              Go Back
            </button>
            {/* Button to enlist the bot */}
            <button className="ui button fluid" onClick={() => enlist(bot)}>
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BotSpecs;
