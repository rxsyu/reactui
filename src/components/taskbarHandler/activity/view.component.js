import { Component } from "react";
import { Link } from "react-router-dom";

export default class View extends Component {
  state = {
    isViewOpen: false,
  };

  toggleView = () => {
    this.setState((prevState) => ({
      isViewOpen: !prevState.isViewOpen,
    }));
  };

  render() {
    const { isViewOpen } = this.state;

    return (
      <>
        <span
          className={`p-2 transition-all hover:bg-zinc-700 hover:rounded-lg cursor-pointer ${
            isViewOpen ? "bg-zinc-700 rounded-lg" : ""
          }`}
          onClick={this.toggleView}
        >
          View
        </span>
        {isViewOpen && (
          <div
            className="absolute left-0 top-10 p-2 bg-zinc-900 text-zinc-100 rounded-lg"
            style={{ minWidth: "150px" }}
          >
            <Link
              to="/"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Show desktop
            </Link>
          </div>
        )}
      </>
    );
  }
}
