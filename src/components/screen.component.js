import { Component } from "react";
import Taskbar from "./taskbar.component";
import Hunt from "./hunt.component";

export default class Screen extends Component {
  render() {
    return (
      <>
        <Taskbar />
        <div className="flex flex-col w-full h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1610333684078-c89bd57f2e46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover">
          <Hunt />
        </div>
      </>
    );
  }
}
