import { Component } from "react";

export default class Hunt extends Component {
  render() {
    return (
      <div className="flex flex-row gap-2 items-center justify-start px-80 py-4 bg-zinc-100 text-zinc-100 bg-opacity-50 rounded-md font-medium text-base">
        <span class="material-symbols-rounded">search</span>Search
      </div>
    );
  }
}
