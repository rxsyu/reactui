import { Component } from "react";

export default class Dock extends Component {
  render() {
    return (
      <div className="flex flex-row mb-2 gap-2 bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 rounded-lg p-2">
        <img
          src="./app/adobe-acrobat-pro.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-adobe-fonts.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img src="./app/adobe-air-sdk.svg" width="40" height="40" alt="app" />
        <img
          src="./app/adobe-analytics.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img src="./app/adobe-capture.svg" width="40" height="40" alt="app" />
        <img
          src="./app/adobe-illustrator-draw.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-photoshop-elements-pro.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-photoshop-sketch.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-premiere-elements.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-shockwave-player.svg"
          width="40"
          height="40"
          alt="app"
        />
        <img
          src="./app/adobe-spark-post.svg"
          width="40"
          height="40"
          alt="app"
        />
      </div>
    );
  }
}
