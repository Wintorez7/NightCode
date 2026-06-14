import type { KeyBinding } from "@opentui/core";
import Statusbar from "./status-bar";

type Props = {
  onSubmit: (text: String) => void;
  disabled?: boolean;
};

export const TEXTAREA_KEY_BINDING: KeyBinding[] = [
    {name:"return", action:"submit"},
    {name:"enter", action:"submit"},
    {name:"return", ctrl:true , action:"newline"},
    {name:"enter", ctrl:true , action:"newline"},
    {name: "a", ctrl: true, action: "select-all" },
]

export default function InputBar({ onSubmit, disabled = false }: Props) {
  return (
    <box width="100%" >
      <box
       border={["left"]}
       borderColor="cyan"
      // todo : add left bar
      >
        <box
          position="relative"
          justifyContent="center"
          paddingX={2}
          paddingY={1}
          backgroundColor="#1A1A24"
          width="100%"
          gap={1}
        >
          
          <textarea
            width="100%"
            focused={!disabled}
            placeholder={`Ask anything... "Fix a bug in database"`}
            keyBindings={TEXTAREA_KEY_BINDING}
          />
          <Statusbar />
        </box>
      </box>
    </box>
  );
}
