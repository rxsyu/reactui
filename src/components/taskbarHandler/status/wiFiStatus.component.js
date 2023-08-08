import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class WiFiStatus extends Component {
  render() {
    const { wifiName } = this.props;

    return (
      <div className="flex flex-row items-center gap-2 font-medium">
        <Link
          to="/"
          className="flex p-2 gap-1 items-center transition-all hover:bg-zinc-700 hover:rounded-lg"
        >
          <span className="material-symbols-rounded">signal_wifi_4_bar</span>
          {wifiName}
        </Link>
      </div>
    );
  }
}
