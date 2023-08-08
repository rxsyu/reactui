import { Component } from "react";
import ChangeDesktopWallpaper from "./settings/changeDesktopWallpaper.component";

export default class Settings extends Component {
  state = {
    isSettingsOpen: false,
  };

  toggleSettings = () => {
    this.setState((prevState) => ({
      isSettingsOpen: !prevState.isSettingsOpen,
    }));
  };

  render() {
    const { isSettingsOpen } = this.state;

    return (
      <>
        <span
          className={`p-2 transition-all hover:bg-zinc-700 hover:rounded-lg cursor-pointer ${
            isSettingsOpen ? "bg-zinc-700 rounded-lg" : ""
          }`}
          onClick={this.toggleSettings}
        >
          Settings
        </span>
        {isSettingsOpen && (
          <div
            className="absolute left-0 top-14 p-2 bg-zinc-900 text-zinc-100 rounded-lg"
            style={{ minWidth: "150px" }}
          >
            <ChangeDesktopWallpaper />
          </div>
        )}
      </>
    );
  }
}
