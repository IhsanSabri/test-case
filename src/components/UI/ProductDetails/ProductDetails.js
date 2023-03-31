import React, { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../services/CartSlicer";
import { Flex, Text, Image } from 'rebass';
import CheckoutCart from "../CheckoutCart/CheckoutCart";
import { Wrapper, CardWrapper, ImageBox, InfoWrapper, AddToCartButton } from "./style";


const ProductDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchProductDetail = async (id) => {
        axios.get(`https://5fc9346b2af77700165ae514.mockapi.io/products/${id}`)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchProductDetail(id);
    }, [id]);

    const addProduct = () => {
        dispatch(addToCart(data));
    };

    return (
        <Wrapper>
            <CardWrapper>
                <Flex>
                    <ImageBox>
                        <Image src={data.image} />
                    </ImageBox>
                    <InfoWrapper>
                        <Text fontSize={3} fontWeight='bold' mb={2}>
                            {data.name}
                        </Text>
                        <Text color={'blue'} fontSize={2} fontWeight='bold' mb={3}>
                            ${data.price}
                        </Text>
                        <AddToCartButton type="primary" onClick={addProduct}>Add to Cart</AddToCartButton>
                        <Text color='gray' mb={2}>
                            {data.description}
                        </Text>
                    </InfoWrapper>
                </Flex>
            </CardWrapper>
            <CheckoutCart />
        </Wrapper >
    );
}

export default memo(ProductDetails);
