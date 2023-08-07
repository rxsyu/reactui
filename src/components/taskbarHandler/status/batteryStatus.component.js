import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class BatteryStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batteryLevel: null,
    };
  }

  componentDidMount() {
    this.updateBatteryStatus();

    this.interval = setInterval(() => {
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
    const { batteryLevel } = this.state;

    return (
      <div className="flex flex-row items-center gap-2 font-medium">
        <Link
          to="/"
          className="flex p-2 gap-1 items-center transition-all hover:bg-zinc-700 hover:rounded-lg"
        >
          <span className="material-symbols-rounded">battery_horiz_075</span>
          {batteryLevel !== null ? `${batteryLevel.toFixed(0)}%` : "N/A"}
        </Link>
      </div>
    );
  }
}
