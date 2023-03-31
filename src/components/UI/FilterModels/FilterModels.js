import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
import { Checkbox } from 'antd';
import { FilterBox, FilterName, BoxContainer, SearchInput } from "../../style/filterElementStyle";

const FilterModels = ({ titleName, filterArray, parameter, data ,setData }) => {
    const [filterList, setFilterList] = useState([]);
    const { products } = useSelector(state => state.products);
    const sortedArray = [...filterArray];
    const newFilterArray = sortedArray.sort((a, b) => a.localeCompare(b));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFilterList(newFilterArray);
          }, 250);
      
          return () => clearInterval(intervalId);  
    }, [newFilterArray]);

    const onSearch = (e) => {
        const newList = newFilterArray.filter((filterName) =>
            filterName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        ).map(item => item);

        setFilterList(newList);
    };

    const onChange = (checkedValues) => {
        if (checkedValues.length > 0) {
            const checkedData = data.filter(item => {
                return checkedValues.includes(item[parameter].toLowerCase())
             }).map(item => item);

             setData(checkedData);
        } else {
            setData(products);
        }
    };

    return (
        <BoxContainer className="filterModels">
            <FilterName>{titleName}</FilterName>
            <FilterBox>
                <SearchInput
                    placeholder="Search"
                    onChange={onSearch}
                />
                <Checkbox.Group style={{ flexDirection: 'column' }} onChange={onChange}>
                    {filterList.map(value =>
                        <Checkbox value={value.toLowerCase()} key={value}>{value}</Checkbox>
                    )}
                </Checkbox.Group>
            </FilterBox>
        </BoxContainer>
    )
}

export default memo(FilterModels);