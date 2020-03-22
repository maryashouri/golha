import React from "react";
import { Button, Page } from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import SecondPage from "../Users/index";
import Menu from "../../components/Menu";

const MainPage = ({ pushPage }) => {
  return (
    <Page renderToolbar={() => <Menu title="صفحه اصلی" />}>
      <div
        style={{
          textAlign: "center",
          margin: 10
        }}
      >
        <h1>به اپلیکیشن گلها خوش آمدید</h1>
        <Button onClick={() => pushPage(SecondPage, "افراد")}>افراد</Button>
      </div>
    </Page>
  );
};

export default MainPage;
