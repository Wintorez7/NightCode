import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import InputBar from "./components/input-bar";
import Header from "./components/Header";

function App() {
  return (
    <box alignItems="center" justifyContent="center" backgroundColor="#0D0D12" width="100%"  height="100%">
      <Header/>
      <box width="100%" maxWidth={100} paddingX={2} marginTop={1}>
        <InputBar onSubmit={() => {}}/>
      </box>  
    </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
