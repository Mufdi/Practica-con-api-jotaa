import React, { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import Empty from "./Empty";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

function Home() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const getAllProducts = async () => {
            const products = await getData();
            setProducts(products);
        };
        getAllProducts();
        setIsLoading(false);
    }, []);

    const handleSearchResults = (products) => {
        if (!Array.isArray(products)) {
            setProducts([products]);
        } else {
            setProducts(products);
        }
    };

    console.log(products);

    if (!isLoading && products.length === 0) {
        return (
            <div>
                <SearchBar onSearch={handleSearchResults} />
                <Empty />
            </div>
            );
    }
    return (
        <div>
            <SearchBar onSearch={handleSearchResults} />
            <ul>
                {
                    products?.filter((product) => (product.status === 'visible')).map((product) => (
                    <li>
                        <ProductCard key={product.id} product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
