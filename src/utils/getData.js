import axios from "axios";

export async function getData() {
    const data = await axios(
        `https://desarrollojotaa.cl/api-products/api/products`
    );
    const apiData = await data.data.products.map((p) => {
        return {
            id: p.id,
            name: p.name,
            description: p.description,
            image: p.image,
            price: p.price,
            status: p.status,
            created_at: p.created_at,
            updated_at: p.updated_at,
        };
    });
    return apiData;
}


export async function getDataByNameOrId(query) {
    if (typeof query === "number") {
        const data = await axios(
            `https://desarrollojotaa.cl/api-products/api/product/${query}`
        );
        return data.data.product;
    }
    if (typeof query === "string") {
        const data = await axios(
            `https://desarrollojotaa.cl/api-products/api/products/search/${query}`
            );
        return data.data.products;
    }
}

