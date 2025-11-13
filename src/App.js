import Dice from "react-dice-roll";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "transparent",
      }}
    >
      <Dice
        cheatValue={6}
        style={{ width: "1000", height: "1000" }}
        onRoll={(value) => console.log(value)}
        size={500}
        rollingTime={3000}
      />
    </div>
  );
};

export default App;
