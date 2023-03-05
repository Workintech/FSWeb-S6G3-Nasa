import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";

const MainPage = ({ post }) => {
  const StyledCardText = styled(CardText)`
    color: #999;
    font-style: italic;
    font-size: 0.7rem;
  `;
  return (
    <div>
      <Card inverse>
        <CardImg
          alt={post.title + post.copyright}
          src={post.url}
          width="100%"
        />
        <CardImgOverlay>
          <CardTitle tag="h5">{post.title}</CardTitle>
          <StyledCardText>{post.explanation}</StyledCardText>
          <CardText>
            <small className="text-muted">{post.copyright}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default MainPage;
