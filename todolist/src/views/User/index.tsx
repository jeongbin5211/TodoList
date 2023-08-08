import React from "react";
import UserList from "./views/UserList";
import UserForm from "./views/UserForm";

export default function Index() {
  return (
    <div>
      <UserList />
      <UserForm />
    </div>
  );
}
