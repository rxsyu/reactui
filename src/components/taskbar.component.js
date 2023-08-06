import { Component } from "react";
import { Link } from "react-router-dom";

export default class Taskbar extends Component {
  render() {
    return (
      <div className="fixed w-full">
        <div className="flex flex-row w-full h-full items-center justify-between p-2 bg-zinc-900 text-zinc-100 text-sm">
          <div className="flex flex-row items-center gap-4">
            <Link
              to="/"
              className="p-2 font-bold transition-all hover:bg-zinc-700 hover:rounded-md"
            >
              React
            </Link>
            <div className="flex flex-row gap-4 font-medium">
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-700 hover:rounded-md"
              >
                Applications
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-700 hover:rounded-md"
              >
                View
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-700 hover:rounded-md"
              >
                Settings
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-700 hover:rounded-md"
              >
                Device
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 font-medium">
            <Link
              to="/"
              className="flex p-2 items-center transition-all hover:bg-zinc-700 hover:rounded-md"
            >
              <span className="material-icons-outlined">wifi</span>
            </Link>
            <Link
              to="/"
              className="flex p-2 items-center transition-all hover:bg-zinc-700 hover:rounded-md"
            >
              <span className="material-icons-round">volume_up</span>
            </Link>
            <Link
              to="/"
              className="flex p-2 gap-1 items-center transition-all hover:bg-zinc-700 hover:rounded-md"
            >
              <span className="material-icons-round">battery_full</span>
              100%
            </Link>
            <Link
              to="/"
              className="p-2 transition-all hover:bg-zinc-700 hover:rounded-md"
            >
              Monday, August 7, 2023 03.35
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
