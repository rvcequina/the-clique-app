import { createContext } from "react";

export const NOTIFY_CONTEXT = {
  list: []
 
};

export const notifyContext = createContext(NOTIFY_CONTEXT);
