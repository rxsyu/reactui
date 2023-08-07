import { Component } from "react";
import { Link } from "react-router-dom";

export default class Taskbar extends Component {
  render() {
    return (
      <div className="fixed w-full">
        <div className="flex flex-row w-full h-full items-center justify-between p-1 bg-zinc-800 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 text-sm">
          <div className="flex flex-row items-center gap-2">
            <Link
              to="/"
              className="p-2 font-bold transition-all hover:bg-zinc-900 hover:rounded-md"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                width="20"
                height="20"
                alt="react"
              />
            </Link>
            <div className="flex flex-row items-center gap-2 font-medium">
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-900 hover:rounded-md"
              >
                Applications
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-900 hover:rounded-md"
              >
                View
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-900 hover:rounded-md"
              >
                Settings
              </Link>
              <Link
                to="/"
                className="p-2 transition-all hover:bg-zinc-900 hover:rounded-md"
              >
                Device
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2 font-medium">
            <Link
              to="/"
              className="flex p-2 gap-1 items-center transition-all hover:bg-zinc-900 hover:rounded-md"
            >
              <span className="material-symbols-rounded">
                battery_horiz_075
              </span>
              75%
            </Link>
            <Link
              to="/"
              className="p-2 transition-all hover:bg-zinc-900 hover:rounded-md"
            >
              Monday, August 7, 2023 03.35
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
