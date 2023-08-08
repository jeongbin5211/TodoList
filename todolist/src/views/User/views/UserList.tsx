import React from "react";
import { useStore } from "zustand";

export default function UserList() {
  const users = useStore((state) => state.users);
  return <div>UserList</div>;
}
