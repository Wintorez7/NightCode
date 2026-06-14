import type { Commond } from "./type";

export const COMMONDS:Commond[] = [
  {
    name: "new",
    description: "Start a new Conversation",
    value: "/new",
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action:(ctx) => {
        ctx.exit();
    }
  },
];

