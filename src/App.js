import Dice from "react-dice-roll";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Listen for messages from React Native
    window.addEventListener("message", (event) => {
      console.log("Message from React Native:", event.data);
    });
  }, []);

  const handleRoll = (value) => {
    console.log("Dice rolled:", value);

    // Send message to React Native when dice finishes
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "DICE_ROLLED",
          value: value,
          isWin: true, // Always win
        })
      );
    }
  };

  return (
    <Dice
      cheatValue={6}
      style={{ width: "100%", height: "100%" }}
      onRoll={handleRoll}
      size={250}
      rollingTime={3000}
    />
  );
};

export default App;
