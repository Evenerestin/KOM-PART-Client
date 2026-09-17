import { useContext } from "react";
import { PanelAuthContext } from "./PanelAuthContext.jsx";

export function usePanelAuth() {
  const ctx = useContext(PanelAuthContext);
  if (!ctx) {
    throw new Error("usePanelAuth must be used within a PanelAuthProvider");
  }
  return ctx;
}
