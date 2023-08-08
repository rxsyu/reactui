import { Component } from "react";

export default class Listen extends Component {
  render() {
    return (
      <div className="fixed right-0 top-14">
        <div className="flex flex-col items-end p-2">
          <div className="flex flex-row justify-between gap-8 w-[440px] bg-zinc-900 bg-opacity-50 transition-all hover:bg-opacity-100 text-zinc-100 hover:ring-1 hover:ring-zinc-700 px-16 py-8 rounded-lg">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-sm">Face Down</label>
              <label className="font-medium text-xs">The Red Jumpsuit Apparatus</label>
              <label className="font-medium text-xs">
                Dont You Fake It
              </label>
            </div>
            <img
              className="w-16 h-16 rounded-lg"
              src="https://i0.wp.com/colorcodedlyrics.com/wp-content/uploads/2017/07/MONSTA-X-NEWTON.jpg?resize=200%2C200&ssl=1"
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
