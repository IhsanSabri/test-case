import React, { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { addToCart } from "../../../services/CartSlicer";
import { Flex, Text, Image } from 'rebass';
import CheckoutCart from "../CheckoutCart/CheckoutCart";
import { CardWrapper, ImageBox, InfoWrapper, AddToCartButton } from "./style";
import { Col, Row } from "antd";


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
        <Row style={{ columnGap: "20px", justifyContent: "center" }}>
            <Col xs={22} sm={22} md={18} lg={18} xl={18}>
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
            </Col>
            <Col xs={22} sm={22} md={4} lg={4} xl={4}>
                <CheckoutCart />
            </Col>
        </Row>
    );
}

export default memo(ProductDetails);
