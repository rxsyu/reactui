import { Component } from "react";
import { Link } from "react-router-dom";

export default class Applications extends Component {
  state = {
    isApplicationOpen: false,
  };

  toggleApplication = () => {
    this.setState((prevState) => ({
      isApplicationOpen: !prevState.isApplicationOpen,
    }));
  };

  render() {
    const { isApplicationOpen } = this.state;

    return (
      <>
        <span
          className={`p-2 transition-all hover:bg-zinc-700 hover:rounded-lg cursor-pointer ${
            isApplicationOpen ? "bg-zinc-700 rounded-lg" : ""
          }`}
          onClick={this.toggleApplication}
        >
          Applications
        </span>
        {isApplicationOpen && (
          <div
            className="absolute left-0 top-10 p-2 bg-zinc-900 text-zinc-100 rounded-lg"
            style={{ minWidth: "150px" }}
          >
            <Link
              to="https://www.figma.com/login"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=zfHRZ6i1Wg0U&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Figma
            </Link>
            <Link
              to="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638270339680459291.ODc2OTAyZTItNjBmZS00NTAyLWJmNTQtZGYxMTNiMjRjMDQzMjAzOTc4NmMtZWQ5ZC00ZTkxLWExZGItM2JiZGNlNTdmNDQ3&ui_locales=en-US&mkt=en-US&state=wKwitRQD4gwJuzptTyFysS99PK0atYMVIjniOQMOW7GVbAtyncOuQt_n51JsBvZLd4PPrnS1bOqQrgXkUdXDTRj4bQMwNA4WAtwXU5iK2YxR9ZkYi2bzIH52JQbj7M70cSpSnZsPlVU_-YuqKce-b-pxHg--XEsZ0uNah7yOM-PM8UdwRcegvM2fm5p7xaWOE3mq0QQDKOpM__-rSfzds80a9-JUtlhj1CXGcKUbG658KRT53PsR7w_R0tk5FejPlSglIMycwgpV9b_iEmsABdR4SljcSBvJhCFC1kAB_i51uT7re2ULdlyHpu5AyDFXwXZi0ZE5Ea0rxP1baQvfMUwNLU-i8EK2gN0z3CQ24wE&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=117561&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Excel
            </Link>
            <Link
              to="https://onedrive.live.com/about/en-us/signin/"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=117559&format=png"
                width="20"
                height="20"
                alt="word"
              />
              OneDrive
            </Link>
            <Link
              to="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=15&ct=1691438408&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26cobrandid%3dab0455a0-8d03-46b9-b18b-df2f57b9e44c%26RpsCsrfState%3d8a8d451f-a294-272e-ed0b-adb6c5a7892d&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c"
              className="flex flex-row gap-2 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=117562&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Outlook
            </Link>
            <Link
              to="https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638270339132859391.OTUyZGNkY2EtYzM5ZS00MjAwLTg4ZDItY2MzMzIxZGI1MGMxOGE0ZDQ0ZjYtMzA5Mi00NTY1LTlmYmMtNmQ0MDg3MjNjMTQ4&ui_locales=en-US&mkt=en-US&msafed=0&state=Ll00Eu8M7zyPDvPI-Bit44XI1YUyQ4FhYKqXBixOz4Lk-B3ceQAJycNxNZ5ItqEkvw0nib-gxHOLBWHZn3Mc4rH4xmbb-hzbhkl-_PhKSrnloE6MRm3cw9vym7zV6xTmmUeDmIW0IYppUy1G8IW-0c9JEop-lMOY03u9nRBNM_2tK4TWLJErsELEhMU0TWnKh-vLZVfSPBCIj-n_dbDALlEf5S8QBSb-i4IFjPyFU-dxmOFjZxNPZTBgUTNgKWvh98PSiOfeoc8ou3rBZyPmfBOXAGrwfYcaodYXGUbHmoY459w-G9U982wI-3p-3GL5Yi56eF72cCMIhMd4bzgXdkjEHttvTg0xrVMFMNjraFE8oFsFTq90sEMAvO83Fh_Avbb9eH-Va4g6cFLFYyi43QQX4gxYFt5pisNJPZMNW4bh3CMvbWIsC-ZTFbcAtLfz&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0"
              className="flex flex-row gap-2 mt-1 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=117557&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Power Point
            </Link>
            <Link
              to="https://open.spotify.com/"
              className="flex flex-row gap-2 mt-1 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=63316&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Spotify
            </Link>
            <Link
              to="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638270339957308487.ZTZiZjE4ZGYtMTRhNC00NTMwLWExYjEtNjA3MmY4YTY0YmE2MmE4NTA4OTktMGViNy00NjFmLTg2MjctMWI2ODg4NmI3ZDVj&ui_locales=en-US&mkt=en-US&state=PFrZT4HoljK3r-6GBL_DZ9XgmS36GV8tK4QyTVbrlfJ6Y1Ja8AWWs6_PRySuEq9pF0ewt9Kjaf0FPEQ1g77Pcly5g2-1LD86OA3F6k2e3030hRrpkMmRBrBE6MaeHOQNGT0wVUACeanGltv7uKVhDVPRGJ_unjp4LORb4UnbWjk7jKV-51ZKxvXibf3A4OJ-9CMftWnGLQ7P1M3assniTGHnlol-9OxqWnYgk1uAwbr9jYqP7tQxt4RUHkDS-vP8dwCxysEjgYxxogOeO6Oqfv6EWyx5aTVBy-SahX__WR9ID1I9RFq15G8cZIrVNNibsZEOaJd9Ox-gKHCzrSiWIpNXxxX-PtHIqOxk8MLNw8k&x-client-SKU=ID_NET6_0&x-client-ver=6.30.1.0"
              className="flex flex-row gap-2 mt-1 px-4 py-2 transition-all hover:bg-zinc-700 hover:rounded-lg"
            >
              <img
                src="https://img.icons8.com/?size=154&id=13674&format=png"
                width="20"
                height="20"
                alt="word"
              />
              Word
            </Link>
          </div>
        )}
      </>
    );
  }
}
