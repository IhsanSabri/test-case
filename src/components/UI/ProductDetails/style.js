import styled from "@emotion/styled";

import { Box, Flex } from 'rebass';
import { Button, Card } from "antd";

const Wrapper = styled(Flex)`
    justify-content: space-evenly;
    margin: 30px 0;
`;

const CardWrapper = styled(Card)`
    width: 60%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
`;

const ImageBox = styled(Box)`
    width: 50%;

    img {
        object-fit: fill;
        height: 100%;
    }
`;

const InfoWrapper = styled(Box)`
    width: 50%;
    padding: 16px;
`;

const AddToCartButton = styled(Button)`
    width: 100%;
    margin-bottom: 10px;
`

export { Wrapper, CardWrapper, ImageBox, InfoWrapper, AddToCartButton };
