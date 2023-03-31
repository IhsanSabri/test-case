import styled from "@emotion/styled";

import { Flex } from "rebass";

const FilterWrapper = styled(Flex)`
    flex-direction: column;
    width: 12%;
`;

const ProductListWrapper = styled(Flex)`
    width: 60%;
    flex-direction: column;
    align-items: center;
`;

export { FilterWrapper, ProductListWrapper };
