import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DateTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentTime } = this.state;
    const formattedTime = currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = currentTime.toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    return (
      <div className="flex flex-row items-center gap-2 font-medium">
        <Link
          to="/"
          className="p-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
        >
          {formattedDate} {formattedTime}
        </Link>
      </div>
    );
  }
}
