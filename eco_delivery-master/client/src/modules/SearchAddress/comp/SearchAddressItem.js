import React from "react";

const SearchAddressItem = ({ item, handleDelete }) => {
    return (
        <div className="search-address__item">
            <div className="search-address__item__el">{item.item_name}</div>
            <div className="search-address__item__el">
                {item.item_weight}
                <div
                    className="search-address__item__el__emoji"
                    onClick={() => handleDelete(item.id)}
                >
                    <img src="svgs/x.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SearchAddressItem;
