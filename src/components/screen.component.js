import { Component } from "react";
import Taskbar from "./taskbar.component";

export default class Screen extends Component {
  render() {
    return (
      <>
        <Taskbar />
        <div className="flex flex-col w-full h-screen items-center justify-center">
          Screen
        </div>
      </>
    );
  }
}
