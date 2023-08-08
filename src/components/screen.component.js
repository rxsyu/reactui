import React, { Component } from "react";
import Taskbar from "./taskbarHandler/taskbar.component";
import Hunt from "./hunt.component";
import Dock from "./dock.component";
import Listen from "./listen.component";

export default class Screen extends Component {
  state = {
    backgroundImage:
      "https://images.unsplash.com/photo-1455998450620-4427309e3222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3252&q=80",
  };

  render() {
    const { backgroundImage } = this.state;

    return (
      <div
        className="flex flex-col w-full h-screen items-center justify-between"
        style={{
          backgroundImage: backgroundImage ? `url('${backgroundImage}')` : "",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col w-full">
          <Taskbar />
          <Listen />
        </div>
        <Hunt />
        <Dock />
      </div>
    );
  }
}
