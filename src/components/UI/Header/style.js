import styled from "@emotion/styled";

import { Row, Col } from "antd";
import { Link } from 'react-router-dom';

const MainHeader = styled(Row)`
  background: #1E37FF;
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const Column = styled(Col)`
  text-align: center;
`;

const BrandName = styled(Link)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  color: #FFFFFF !important;
`


export { MainHeader, Column, BrandName };
