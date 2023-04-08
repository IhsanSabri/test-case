import React from "react";
import { useSelector } from "react-redux";
import { MainHeader, Column, BrandName } from "./style";
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Input } from "antd";

const { Search } = Input;

const Header = ({ setData }) => {
    const { products } = useSelector(state => state.products);
    const cartList = useSelector((state) => state.cart);
    const totalPrice = cartList.cart.reduce(
        (a, c) => a + c.quantity * c.price,
        0
    );

    const handleSearch = (value) => {
        const searcedData = products.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1).map(item => item);
        setData(searcedData);
    };

    return (
        <MainHeader mode="horizontal">
            <Column xs={8} sm={8} md={8} lg={4} xl={4}>
                <BrandName to={'/'}>
                    Eteration
                </BrandName>
            </Column>
            <Column xs={8} sm={8} md={8} lg={8} xl={10}>
                <Search
                    placeholder="Search"
                    onSearch={handleSearch}
                />
            </Column>
            <Column xs={4} sm={4} md={4} lg={4} xl={4}>
                <ShoppingOutlined />{totalPrice}
            </Column>
            <Column xs={4} sm={4} md={4} lg={4} xl={4}>
                <UserOutlined /> İhsan Sabri
            </Column>
        </MainHeader>
    );
};

export default Header;
