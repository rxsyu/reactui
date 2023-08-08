import { Component } from "react";
import { Link } from "react-router-dom";

export default class Device extends Component {
  state = {
    isDeviceOpen: false,
  };

  toggleDevice = () => {
    this.setState((prevState) => ({
      isDeviceOpen: !prevState.isDeviceOpen,
    }));
  };

  render() {
    const { isDeviceOpen } = this.state;

    return (
      <>
        <span
          className={`p-2 transition-all hover:bg-zinc-700 hover:rounded-lg cursor-pointer ${
            isDeviceOpen ? "bg-zinc-700 rounded-lg" : ""
          }`}
          onClick={this.toggleDevice}
        >
          Device
        </span>
        {isDeviceOpen && (
          <div
            className="absolute left-0 top-14 p-2 bg-zinc-900 text-zinc-100 rounded-lg"
            style={{ minWidth: "150px" }}
          >
            <Link
              to="/"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Nearby
            </Link>
          </div>
        )}
      </>
    );
  }
}
