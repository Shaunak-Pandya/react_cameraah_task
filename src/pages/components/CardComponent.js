import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar, Button } from "antd";
const { Meta } = Card;

function CardComponent({ cardEmail, cardName }) {
  const history = useHistory();
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.setItem("isLoggedIn", false);
    history.push("/login");
  };
  const changePassword = () => {
    history.push(`/password-reset/${cardEmail}`);
  };
  return (
    <div>
      <Card
        style={{ width: 300, marginLeft: 100, margin: 50 }}
        cover={
          <img
            alt="User"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          // <SettingOutlined key="setting"/>,
          <Button onClick={logout}>Logout</Button>,
          <Button onClick={changePassword}>Change Pass</Button>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={cardName}
          description={cardEmail}
        />
      </Card>
    </div>
  );
}

export default CardComponent;
