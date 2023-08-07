import { Component } from "react";

export default class Hunt extends Component {
  render() {
    return (
      <div className="flex flex-row gap-2 items-center justify-start px-64 py-4 bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 rounded-lg font-medium text-base">
        <span class="material-symbols-rounded">search</span>Search
      </div>
    );
  }
}
