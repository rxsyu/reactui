import React, { Component } from "react";

export default class Dock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredImage: null,
    };
  }

  handleImageHover = (index) => {
    this.setState({ hoveredImage: index });
  };

  handleImageLeave = () => {
    this.setState({ hoveredImage: null });
  };

  render() {
    const appImages = [
      "https://img.icons8.com/?size=154&id=117561&format=png",
      "https://img.icons8.com/?size=154&id=117559&format=png",
      "https://img.icons8.com/?size=154&id=117562&format=png",
      "https://img.icons8.com/?size=154&id=117557&format=png",
      "https://img.icons8.com/?size=154&id=63316&format=png",
      "https://img.icons8.com/?size=154&id=13674&format=png",
    ];

    return (
      <div className="flex flex-row mb-2 hover:mb-4 gap-2 bg-zinc-900 bg-opacity-50 transition-all hover:shadow-2xl hover:shadow:zinc-500 hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 rounded-lg p-2 hover:scale-125">
        {appImages.map((src, index) => (
          <img
            key={index}
            src={src}
            width="40"
            height="40"
            alt="app"
            onMouseEnter={() => this.handleImageHover(index)}
            onMouseLeave={this.handleImageLeave}
            style={{
              transform:
                this.state.hoveredImage === index ? "scale(1.25)" : "scale(1)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity:
                this.state.hoveredImage === null ||
                this.state.hoveredImage === index
                  ? 1
                  : 0.5,
            }}
          />
        ))}
      </div>
    );
  }
}
