import React from "react";
import { Button, Page } from "react-onsenui";
import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";
import Menu from "../../components/Menu";

const ThirdPage = ({ data, popPage }) => {
  const user = data;
  return (
    <Page
      renderToolbar={() => (
        <Menu title="نمایش اطلاعات فرد" onBackButton={popPage} />
      )}
    >
      <div
        style={{
          textAlign: "center",
          margin: 10
        }}
      >
        <h2>
          {user.first_name}
          {user.last_name}
        </h2>
        <h3>{user.email}</h3>
        <img src={user.avatar} />
        <Button className="back-btn" onClick={popPage}>
          بازگشت
        </Button>
      </div>
    </Page>
  );
};

export default ThirdPage;
