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
    const isLowPower = batteryLevel !== null && batteryLevel < 16;
    const isOptimizedCharging = batteryLevel !== null && batteryLevel > 79;
    const isPerformanceMode =
      batteryLevel !== null && !isLowPower && !isOptimizedCharging;

    const percentageClassName = isLowPower
      ? "text-red-500"
      : isOptimizedCharging
      ? "text-green-500"
      : isPerformanceMode
      ? "text-purple-500"
      : "";

    return (
      <div className="flex flex-row items-center gap-2 font-medium">
        <Link
          to="/"
          className={`flex p-2 gap-1 items-center transition-all hover:bg-zinc-700 hover:rounded-lg ${
            isLowPower ? "text-red-500" : ""
          } ${isOptimizedCharging ? "text-green-500" : ""}`}
        >
          <span
            className={`material-symbols-rounded ${
              isLowPower ? "text-red-500" : ""
            } ${isOptimizedCharging ? "text-green-500" : ""}`}
          >
            battery_horiz_075
          </span>
          {batteryLevel !== null ? (
            <span className={percentageClassName}>
              {`${batteryLevel.toFixed(0)}%`}
            </span>
          ) : (
            "N/A"
          )}
          {isLowPower && <span className="text-red-500 ml-2">Low Power</span>}
          {isOptimizedCharging && (
            <span className="text-green-500 ml-2">Optimized Charging Mode</span>
          )}
          {isPerformanceMode && (
            <span className="text-purple-500 ml-2">Performance Mode</span>
          )}
        </Link>
      </div>
    );
  }
}
