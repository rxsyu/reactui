import React, { Component } from "react";

export default class ChangeDesktopWallpaper extends Component {
  handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      this.props.onChangeWallpaper(imageUrl);
    }
  };

  render() {
    return (
      <label className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg">
        Change desktop wallpaper
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={this.handleFileChange}
        />
      </label>
    );
  }
}
