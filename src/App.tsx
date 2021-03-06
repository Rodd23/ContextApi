import TextCounter from "./components/TextCounter";
import ButtonCounter from "./components/ButtonCounter";

import { CounterProvider } from "./hooks/counter";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <TextCounter />
        <ButtonCounter />
      </CounterProvider>
    </div>
  );
}

export default App;
