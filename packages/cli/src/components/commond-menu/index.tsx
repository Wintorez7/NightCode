import type { RefObject } from "react";
import { TextAttributes, type ScrollBoxRenderable } from "@opentui/core";
import { getFilterdCommond } from "./filter-commond";
import { COMMONDS } from "./commond";

const MAX_VISIABLE_ITEMS = 8;

const COMMOND_COL_WIDTH =
  Math.max(...COMMONDS.map((cmd) => cmd.name.length)) + 4;

type CommondMenuProps = {
  query: string;
  selectedIndex: number;
  scrollRef: RefObject<ScrollBoxRenderable | null>;
  onSelect: (index: number) => void;
  onExecute: (index: number) => void;
};

export function CommondMenu({
  query,
  selectedIndex,
  scrollRef,
  onSelect,
  onExecute,
}: CommondMenuProps) {
  const filtered = getFilterdCommond(query);
  const visibleHeight = Math.min(filtered.length, MAX_VISIABLE_ITEMS);

  if (filtered.length === 0) {
    return (
      <box paddingX={1}>
        <text attributes={TextAttributes.DIM}>No Matching Commonds</text>
      </box>
    );
  }

  return (
    <scrollbox ref={scrollRef} height={visibleHeight}>
      {filtered.map((cmd, i) => {
        const isSelected = i === selectedIndex;

        return (
          <box
            key={cmd.value}
            flexDirection="row"
            paddingX={1}
            height={1}
            overflow="hidden"
            backgroundColor={isSelected ? "#89B4FA" : undefined}
            onMouseMove={() => onSelect(i)}
            onMouseDown={() => onExecute(i)}
          >
            <box width={COMMOND_COL_WIDTH} flexShrink={0}>
              <text selectable={false} fg={isSelected ? "black" : "white"}>
                /{cmd.name}
              </text>
            </box>
            <box flexGrow={1} flexShrink={0} overflow="hidden">
              <text selectable={false} fg={isSelected ? "black" : "gray"}>
                /{cmd.description}
              </text>
            </box>
          </box>
        );
      })}
    </scrollbox>
  );
}
