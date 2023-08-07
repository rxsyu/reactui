import React, { Component } from "react";

export default class Hunt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      this.state.query
    )}`;
    window.open(searchUrl, "_blank");
  };

  render() {
    return (
      <div className="flex flex-row items-center justify-between gap-16 px-16 py-4 bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 rounded-lg font-medium text-base">
        <div className="flex flex-row gap-2">
          <span className="material-symbols-rounded">search</span>
          <input
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}
            className="outline-none border-none bg-transparent text-zinc-100 placeholder-zinc-300"
          />
        </div>
        <button
          onClick={this.handleSearch}
          className="flex text-zinc-100 hover:text-zinc-200"
        >
          <span className="material-symbols-rounded">arrow_forward</span>
        </button>
      </div>
    );
  }
}
