import React, { useState, memo, useEffect, useCallback, useMemo } from "react";
import { Radio } from 'antd';
import { FilterBox, FilterName, BoxContainer } from "./style";

const SortByFilter = ({ titleName, data, setData }) => {
    const [value, setValue] = useState(0);
    const arrayForSort = useMemo(() => [...data], [data]);
    const filterArray = [
        {
            value: 0,
            name: 'Old to New'
        },
        {
            value: 1,
            name: 'New to Old'
        },
        {
            value: 2,
            name: 'Price High to Low'
        },
        {
            value: 3,
            name: 'Price Low to Hight'
        }
    ];
    const sortFunction = useCallback((sortValue, sortArray) => {
        let newData;

        if (sortValue === 0) {
            newData = sortArray.sort((firstItem, secondItem) => new Date(secondItem.createdAt) - new Date(firstItem.createdAt));

            setData(newData);
        }
        else if (sortValue === 1) {
            newData = sortArray.sort((firstItem, secondItem) => new Date(firstItem.createdAt) - new Date(secondItem.createdAt));

            setData(newData);
        } 
        else if (sortValue === 2) {
            newData = sortArray.sort((firstItem, secondItem) => parseFloat(secondItem.price) - parseFloat(firstItem.price));

            setData(newData);
        }
        else if (sortValue === 3) {
            newData = sortArray.sort((firstItem, secondItem) => parseFloat(firstItem.price) - parseFloat(secondItem.price));

            setData(newData);
        }
    }, [setData]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            sortFunction(value, arrayForSort);
          }, 250);
      
          return () => clearInterval(intervalId);  
    }, [sortFunction, value, arrayForSort])

    const onChange = (e) => {
        setValue(e.target.value);
        sortFunction(e.target.value, arrayForSort);
    };

    return (
        <BoxContainer className="sortByFilter">
            <FilterName>{titleName}</FilterName>
            <FilterBox>
                <Radio.Group onChange={onChange} defaultValue={value} style={{ flexDirection: 'column' }}>
                    {filterArray.map(radioValue =>
                        <Radio value={radioValue.value} key={radioValue.value}>{radioValue.name}</Radio>
                    )}
                </Radio.Group>
            </FilterBox>
        </BoxContainer>
    )
}

export default memo(SortByFilter);