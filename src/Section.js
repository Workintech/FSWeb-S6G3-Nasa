import React from "react";
import styled from "styled-components";

const SCSection = styled.section`
  width: 60%;
  margin: 0px auto;
`;
const SCImage = styled.img`
  width: 80%;
  height: 500px;
  background-size: cover;
`;
const SCDate = styled.p`
  font-style: italic;
`;
const SCtext = styled.p`
  font-family: cursive;
  font-size: 13px;
`;
const SCTitle = styled.h4`
  text-transform: uppercase;
`;
function Section(props) {
  const { data } = props;
  return (
    <SCSection>
      <SCTitle className="section--title">{data.title}</SCTitle>
      <SCImage className="section--img" src={data.url} />
      <h4 className="section-copyright">{data.copyright}</h4>
      <SCDate className="section--date">{data.date}</SCDate>
      <SCtext className="section--text">{data.explanation}</SCtext>
    </SCSection>
  );
}
export default Section;
