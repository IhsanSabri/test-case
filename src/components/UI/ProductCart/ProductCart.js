import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../services/CartSlicer";
import { Card, Button, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { Column } from "./style";

const { Meta } = Card;

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    }

    const addProduct = () => {
        dispatch(addToCart(product));
    };

    return (
        <Column key={product.id} className="gutter-row" xs={24} md={12} lg={6}>
            <Link to={`/${product.id}`} key={product.id}>
                <Card
                    bordered={false}
                    onLoad={handleImageLoad}
                    cover={<img alt={product.name} src={product.image} />}
                >
                    <Spin spinning={loading} size="large">
                        <Meta title={product.price}></Meta>
                        <Meta title={product.name} />
                    </Spin>
                </Card>
            </Link>
            <Button type="primary" onClick={addProduct}>Add To Cart</Button>
        </Column>
    );
};

export default memo(ProductCard);
