import { TextAttributes } from "@opentui/core";


export default function Statusbar() {
  return (
    <box flexDirection="row" marginTop={1} gap={1}>
        <text fg="cyan">Build</text>
        <text attributes={TextAttributes.DIM} fg="gray">
        ›
        </text>
        <text>opus-4-6</text>
    </box>
  )
}


