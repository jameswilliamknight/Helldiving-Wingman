import "./App.css";
import Loadout from "./components/Loadout";
import Logo from "./components/Logo";
import "./components/Background.css";

function App() {
  return (
    <div className="App hd2-bg bg-black h-dvh w-dvw flex items-center justify-center flex-col space-y-20">
      <Logo />
      <Loadout />
    </div>
  );
}

export default App;
