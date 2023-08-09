import React, { Component } from "react";
import { Link } from "react-router-dom";
import WiFiStatus from "./status/wiFiStatus.component";
import BatteryStatus from "./status/batteryStatus.component";
import DateTime from "./status/dateTime..component";
import SoundStatus from "./status/soundStatus.component";
import Applications from "./activity/applications.component";
import View from "./activity/view.component";
import Settings from "./activity/settings.component";
import Device from "./activity/device.component";

export default class Taskbar extends Component {
  render() {
    return (
      <div className="flex flex-row w-full items-center justify-between p-0 bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 text-sm">
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
          <div className="flex flex-row items-center gap-2 font-medium relative">
            <Applications />
            <View />
            <Settings />
            <Device />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 font-medium">
          <BatteryStatus />
          <WiFiStatus />
          <SoundStatus />
          <DateTime />
        </div>
      </div>
    );
  }
}
