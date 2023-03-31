import styled from "@emotion/styled";

import { Box } from 'rebass';
import { Button, Card } from "antd";


const CardWrapper = styled(Card)`
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    margin-top: 15px;
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

export { CardWrapper, ImageBox, InfoWrapper, AddToCartButton };
