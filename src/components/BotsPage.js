import React, { useState, useEffect } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "./BotSpecs";

// Component for managing the bot page
function BotsPage() {
  const [botCollection, setBotCollection] = useState([]);
  const [filteredCollection, setFilteredCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [collectionVisible, setCollectionVisible] = useState(true);
  const [botSpecs, setBotSpecs] = useState({});

  // Fetch bot data from the database
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((res) => res.json())
      .then((bots) => {
        setBotCollection(bots);
        setFilteredCollection(bots);
      });
  }, []);

  // Add a bot to the army
  function addToArmy(bot) {
    const newCollection = filteredCollection.filter(
      (card) => card.bot_class !== bot.bot_class
    );
    setFilteredCollection(newCollection);
    setBotArmy([...botArmy, bot]);
    setCollectionVisible(true);
  }

  // Remove a bot from the army
  function removeFromArmy(bot) {
    const newArmy = botArmy.filter((card) => card.id !== bot.id);
    const armyClasses = newArmy.map((bot) => bot.bot_class);
    const newCollection = botCollection.filter(
      (bot) => !armyClasses.includes(bot.bot_class)
    );
    setBotArmy(newArmy);
    setFilteredCollection(newCollection);
  }

  // Delete a bot from the collection
  function deleteBot(bot) {
    const newCollection = botCollection.filter((card) => card !== bot);
    const newFilteredCollection = filteredCollection.filter(
      (card) => card !== bot
    );
    const newArmy = botArmy.filter((card) => card !== bot);
    setBotCollection(newCollection);
    setFilteredCollection(newFilteredCollection);
    setBotArmy(newArmy);

    // Send a DELETE request to the server to delete the bot
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => alert("The selected bot has been deleted successfully!"));
  }

  // Display bot specifications
  function displayBotSpecs(bot) {
    setCollectionVisible(false);
    setBotSpecs(bot);
  }

  // Display bot collection
  function botsCollection() {
    setCollectionVisible(true);
  }

  // Render bot army and either bot collection or bot specs based on visibility
  return (
    <div>
      <YourBotArmy
        bots={botArmy}
        action={removeFromArmy}
        removeCard={deleteBot}
      />
      {collectionVisible ? (
        <BotCollection
          botCollection={filteredCollection}
          action={displayBotSpecs}
          removeCard={deleteBot}
        />
      ) : (
        <BotSpecs bot={botSpecs} back={botsCollection} enlist={addToArmy} />
      )}
    </div>
  );
}

export default BotsPage;
