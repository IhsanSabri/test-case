import styled from "@emotion/styled";

import { Box } from "rebass";
import { Input } from 'antd';

const { Search } = Input;

const BoxContainer = styled(Box)`
    margin-top: 10px;
`

const FilterBox = styled(Box)`
    overflow-y: scroll;
    height: 180.95px;
    background: white;
    font-family: Manrope;
    font-style: normal;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .ant-checkbox-wrapper {
        margin-inline-start: 16px;
    }
`;

const FilterName = styled(Box)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: rgba(51, 51, 51, 0.7);
`;


const SearchInput = styled(Search)`
    align-self: stretch;
    padding: 8px 8px 8px 12px;
    gap: 10px;
`

export { BoxContainer, FilterBox, FilterName, SearchInput };
