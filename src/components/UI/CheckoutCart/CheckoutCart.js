import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Box, Flex } from "rebass";
import { Button } from 'antd';
import {
    reduceProduct,
    incrementProduct,
} from "../../../services/CartSlicer";
import {
    MainContainer,
    CardContainer,
    ItemCard,
    ProductName,
    ProductPrice,
    ProductQuantity,
    IncrementAndReduceButton,
    CheckoutCartContianer
} from "./style";


const CheckoutCart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const totalPrice = products.cart.reduce(
        (zero, item) => zero + item.quantity * item.price,
        0
    );

    return (
        <MainContainer className="checkoutCart">
            <CardContainer>
                {products.cart.map(item =>
                    <ItemCard key={item.id}>
                        <Box>
                            <ProductName>{item.name}</ProductName>
                            <ProductPrice>{item.price}</ProductPrice>
                        </Box>
                        <Flex>
                            <IncrementAndReduceButton onClick={() => dispatch(reduceProduct(item))}>-</IncrementAndReduceButton>
                            <ProductQuantity>{item.quantity}</ProductQuantity>
                            <IncrementAndReduceButton onClick={() => dispatch(incrementProduct(item))}>+</IncrementAndReduceButton>
                        </Flex>
                    </ItemCard>
                )}
            </CardContainer>
            <CheckoutCartContianer>
                <Box>Total Price: {totalPrice}</Box>
                <Button type="primary">Checkout</Button>
            </CheckoutCartContianer>
        </MainContainer>
    );
}

export default React.memo(CheckoutCart);
