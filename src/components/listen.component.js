import { Component } from "react";

export default class Listen extends Component {
  render() {
    return (
      <div className="fixed right-0 top-14">
        <div className="flex flex-col items-end p-2">
          <div className="flex flex-row gap-8 justify-between bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 px-16 py-8 rounded-lg">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-base">Disenchanted</label>
              <label className="font-medium text-xs">My Chemical Romance</label>
            </div>
            <img
              className="rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg"
              width="48"
              height="48"
              alt="album"
            />
          </div>
        </div>
      </div>
    );
  }
}
