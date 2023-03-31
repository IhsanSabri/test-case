import React, { useState, memo } from "react";
import FilterModels from "../FilterModels/FilterModels";
import FilterBrands from "../FilterBrands/FilterBrands";
import ProductCart from "../ProductCart/ProductCart";
import SortByFilter from "../SortByFilter/SortByFilter";
import CheckoutCart from "../CheckoutCart/CheckoutCart";
import { Row, Pagination } from 'antd';
import { FilterWrapper, ProductListWrapper } from "./style";

const MainPage = ({ data, setData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastData = currentPage * 12;
    const indexOfFirstData = indexOfLastData - 12;
    const visibleProducts = data.slice(indexOfFirstData, indexOfLastData);
    const totalPages = Math.ceil(data.length / 12) * 10;
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    const brands = data.map(item => item.brand).filter((value, index, self) => self.indexOf(value) === index);
    const models = data.map(item => item.model).filter((value, index, self) => self.indexOf(value) === index);

    return (
        data &&
        <>
            <FilterWrapper>
                <SortByFilter titleName={'Sort By'} data={data} setData={setData}></SortByFilter>
                <FilterBrands titleName={'Brands'} filterArray={brands} data={data} setData={setData} parameter={'brand'}/>
                <FilterModels titleName={'Models'} filterArray={models} data={data} setData={setData} parameter={'model'}/>/
            </FilterWrapper>
            <ProductListWrapper>
                <Row>
                    { visibleProducts.map(item => <ProductCart key={item.id} product={item} />) }
                </Row>
                {<Pagination current={currentPage} onChange={handlePageChange} total={totalPages} showSizeChanger={false} />}
            </ProductListWrapper>
            <CheckoutCart />
        </>
    )
}

export default memo(MainPage);