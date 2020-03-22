import React from "react";
import "./style.scss";
import { Button, Page, LazyList, ListItem } from "react-onsenui";
import { useFetch } from "../../hooks/useFetch";
import Menu from "../../components/Menu";
import ThirdPage from "../User/index";

const SecondPage = ({ pushPage, popPage }) => {
  const [data] = useFetch("https://reqres.in/api/users?page=1");
  return (
    <Page
      renderToolbar={() => <Menu title="لیست افراد " onBackButton={popPage} />}
    >
      <div style={{ textAlign: "center" }}>
        <LazyList
          modifier="inset"
          length={data.length}
          renderRow={index => (
            <ListItem
              onClick={() => pushPage(ThirdPage, data[index])}
              key={index}
            >
              {data[index].first_name}
            </ListItem>
          )}
          calculateItemHeight={() => 44}
        />
      </div>
      <Button className="back-btn" onClick={popPage}>
        برگشت به صفحه اصلی
      </Button>
    </Page>
  );
};

export default SecondPage;
