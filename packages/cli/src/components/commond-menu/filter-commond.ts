import { COMMONDS } from "./commond";
import type { Commond } from "./type";


export function getFilterdCommond(query:string):Commond[] {
    if(query.length === 0)  return COMMONDS;
    return COMMONDS.filter((cmd) => cmd.name.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))
}