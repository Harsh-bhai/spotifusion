"use client";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function SessionWrapper({ children, session }) {
  return <SessionProvider session={session}>
    <Provider store={store}>
    {children}
      </Provider>
    </SessionProvider>;
}
