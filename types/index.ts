import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
  

  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;  
  containerstyle: string;
  btnType:"button"|"submit";

}