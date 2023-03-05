import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavBar from "../components/NavBar";
import HistoryMenu from "../components/HistoryMenu";
import MainPage from "../pages/MainPage";

const Layout = ({ date, post, changeDate, currentDate }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col className="bg-light border">
            <NavBar />
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border">
            <HistoryMenu
              changeDate={changeDate}
              date={date}
              currentDate={currentDate}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainPage post={post} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
