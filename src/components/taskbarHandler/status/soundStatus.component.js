import React, { Component } from "react";

export default class SoundStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volumePercentage: 25,
    };
  }

  handleVolumeChange = (newVolume) => {
    this.setState({ volumePercentage: newVolume });
  };

  render() {
    const { volumePercentage } = this.state;

    return (
      <div className="flex flex-row items-center gap-1 font-medium">
        <label
          to="/"
          className="flex p-2 gap-1 items-center transition-all hover:rounded-lg"
        >
          <span className="material-symbols-rounded">brand_awareness</span>
          <span className="w-[24px]">{volumePercentage}</span>
        </label>
        <input
          type="range"
          className="w-24 h-2 transition-all hover:h-4 appearance-none bg-gray-100 rounded-full overflow-hidden outline-none"
          min="0"
          max="100"
          value={volumePercentage}
          onChange={(e) => this.handleVolumeChange(e.target.value)}
        />
      </div>
    );
  }
}
