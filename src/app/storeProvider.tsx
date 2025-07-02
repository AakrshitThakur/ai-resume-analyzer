// app/StoreProvider.tsx
"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/index";

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
