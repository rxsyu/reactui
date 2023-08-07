import { Component } from "react";
import { Link } from "react-router-dom";

export default class Settings extends Component {
  state = {
    isSettingsOpen: false,
  };

  toggleSettings = () => {
    this.setState((prevState) => ({
      isSettingsOpen: !prevState.isSettingsOpen,
    }));
  };

  render() {
    const { isSettingsOpen } = this.state;

    return (
      <>
        <span
          className={`p-2 transition-all hover:bg-zinc-700 hover:rounded-lg cursor-pointer ${
            isSettingsOpen ? "bg-zinc-700 rounded-lg" : ""
          }`}
          onClick={this.toggleSettings}
        >
          Settings
        </span>
        {isSettingsOpen && (
          <div
            className="absolute left-0 top-14 p-2 bg-zinc-900 text-zinc-100 rounded-lg"
            style={{ minWidth: "150px" }}
          >
            <Link
              to="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638270339680459291.ODc2OTAyZTItNjBmZS00NTAyLWJmNTQtZGYxMTNiMjRjMDQzMjAzOTc4NmMtZWQ5ZC00ZTkxLWExZGItM2JiZGNlNTdmNDQ3&ui_locales=en-US&mkt=en-US&state=wKwitRQD4gwJuzptTyFysS99PK0atYMVIjniOQMOW7GVbAtyncOuQt_n51JsBvZLd4PPrnS1bOqQrgXkUdXDTRj4bQMwNA4WAtwXU5iK2YxR9ZkYi2bzIH52JQbj7M70cSpSnZsPlVU_-YuqKce-b-pxHg--XEsZ0uNah7yOM-PM8UdwRcegvM2fm5p7xaWOE3mq0QQDKOpM__-rSfzds80a9-JUtlhj1CXGcKUbG658KRT53PsR7w_R0tk5FejPlSglIMycwgpV9b_iEmsABdR4SljcSBvJhCFC1kAB_i51uT7re2ULdlyHpu5AyDFXwXZi0ZE5Ea0rxP1baQvfMUwNLU-i8EK2gN0z3CQ24wE&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              Change desktop wallpaper
            </Link>
          </div>
        )}
      </>
    );
  }
}
