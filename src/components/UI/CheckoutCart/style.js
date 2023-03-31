import styled from "@emotion/styled";
import { Box, Flex } from "rebass";
import { Button, Card } from 'antd';

const MainContainer = styled(Flex)`
    flex-direction: column;
    row-gap: 33px;
    margin-top: 1rem;
`;

const CardContainer = styled(Card)`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;

    .ant-card-body {
    padding: 10px;
    }
`;

const ItemCard = styled(Flex)`
    justify-content: space-between;
    margin-bottom: 10px;
`;

const ProductName = styled(Box)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: #000000;
    margin-bottom: 5px;
`;

const ProductPrice = styled(Box)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    display: flex;
    align-items: center;
    color: #2A59FE;
`;

const ProductQuantity = styled(Flex)`
    align-items: center;
    padding: 5px 7px;
    background-color: #2A59FE;
    justify-content: center;
    height: 32px;
    color: white;
`;

const IncrementAndReduceButton = styled(Button)`
    width: 33%;
    background: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
`;

const CheckoutCartContianer = styled(Card)`
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export {
    MainContainer,
    CardContainer,
    ItemCard,
    ProductName,
    ProductPrice,
    ProductQuantity,
    IncrementAndReduceButton,
    CheckoutCartContianer
}