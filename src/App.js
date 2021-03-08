import "./App.css";
import { ShowDialog } from "./Dialog/Dialog";
import { Menu } from "./Menu/Menu";
import { Radio } from "./Radio/Radio";
import { useRef } from "react";

function App() {
  const rootRef = useRef(null);
  return (
    <div ref={rootRef}>
      <header className="App-header">
        <h1>Accessible components</h1>
      </header>
      <main>
        <h2>Menu</h2>
        <Menu />
        <h2>Radio (Native)</h2>
        <Radio />
        <ShowDialog domNodeFn={() => rootRef.current} />
      </main>
    </div>
  );
}

export default App;
