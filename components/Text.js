import styled from "@emotion/styled";

export const Text = styled.p`
  font-size: ${(props) => (props.size ? props.size : "18px")};
  text-align: ${(props) => (props.align ? props.align : "")};
  font-weight:${(props) => (props.weight ? props.weight : "")};
  color: ${(props) => (props.color ? props.color : "inherit")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  // margin: ${(props) => (props.margin ? props.margin : "0")};
  text-transform: ${(props) => (props.transform ? props.transform : "")};
  ${(props) => props.extra}


  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.mobileSize ? props.mobileSize : "18px")};
  }
`;