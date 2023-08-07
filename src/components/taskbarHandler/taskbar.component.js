import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Taskbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      batteryLevel: null,
    };
  }

  componentDidMount() {
    this.updateBatteryStatus();

    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
      this.updateBatteryStatus();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateBatteryStatus = () => {
    navigator.getBattery().then((battery) => {
      const batteryLevel = battery.level * 100;
      this.setState({ batteryLevel });
    });
  };

  render() {
    const { currentTime, batteryLevel } = this.state;
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = currentTime.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="flex flex-row w-full items-center justify-between p-2 bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 text-sm">
        <div className="flex flex-row items-center gap-2">
          <Link
            to="/"
            className="p-2 font-bold transition-all hover:bg-zinc-700 hover:rounded-lg"
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
              className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Applications
            </Link>
            <Link
              to="/"
              className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              View
            </Link>
            <Link
              to="/"
              className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Settings
            </Link>
            <Link
              to="/"
              className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Device
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 font-medium">
          <Link
            to="/"
            className="flex p-2 gap-1 items-center transition-all hover:bg-zinc-700 hover:rounded-lg"
          >
            <span className="material-symbols-rounded">battery_horiz_075</span>
            {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : "N/A"}
          </Link>
          <Link
            to="/"
            className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
          >
            {formattedDate} {formattedTime}
          </Link>
        </div>
      </div>
    );
  }
}
