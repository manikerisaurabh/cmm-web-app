// This file contains mock API functions that would normally fetch data from a backend

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock categories data
const mockCategories = [
    {
        id: "electronics",
        name: "Electronics",
        description: "Smartphones, laptops, TVs, and more",
        image: "/placeholder.svg?height=140&width=300",
    },
    {
        id: "fashion",
        name: "Fashion",
        description: "Clothing, shoes, and accessories",
        image: "/placeholder.svg?height=140&width=300",
    },
    {
        id: "home",
        name: "Home & Kitchen",
        description: "Furniture, appliances, and decor",
        image: "/placeholder.svg?height=140&width=300",
    },
    {
        id: "grocery",
        name: "Grocery",
        description: "Fresh produce, pantry items, and more",
        image: "/placeholder.svg?height=140&width=300",
    },
    {
        id: "beauty",
        name: "Beauty & Personal Care",
        description: "Skincare, makeup, and personal care",
        image: "/placeholder.svg?height=140&width=300",
    },
    {
        id: "sports",
        name: "Sports & Outdoors",
        description: "Athletic wear, equipment, and outdoor gear",
        image: "/placeholder.svg?height=140&width=300",
    },
];

// Mock subcategories data
const mockSubcategories = {
    electronics: [
        {
            id: "smartphones",
            name: "Smartphones",
            description: "Latest smartphones from top brands",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "electronics",
            categoryName: "Electronics",
        },
        {
            id: "laptops",
            name: "Laptops & Computers",
            description: "Laptops, desktops, and accessories",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "electronics",
            categoryName: "Electronics",
        },
        {
            id: "tvs",
            name: "TVs & Home Entertainment",
            description: "TVs, sound systems, and streaming devices",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "electronics",
            categoryName: "Electronics",
        },
        {
            id: "audio",
            name: "Audio",
            description: "Headphones, speakers, and audio accessories",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "electronics",
            categoryName: "Electronics",
        },
    ],
    fashion: [
        {
            id: "mens",
            name: "Men's Clothing",
            description: "Shirts, pants, jackets, and more",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "fashion",
            categoryName: "Fashion",
        },
        {
            id: "womens",
            name: "Women's Clothing",
            description: "Dresses, tops, bottoms, and more",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "fashion",
            categoryName: "Fashion",
        },
        {
            id: "shoes",
            name: "Shoes",
            description: "Casual, formal, and athletic footwear",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "fashion",
            categoryName: "Fashion",
        },
        {
            id: "accessories",
            name: "Accessories",
            description: "Bags, jewelry, watches, and more",
            image: "/placeholder.svg?height=140&width=300",
            categoryId: "fashion",
            categoryName: "Fashion",
        },
    ],
    // Add more subcategories for other categories as needed
};

// Mock stores data
const generateMockStores = (subcategoryId) => {
    return [
        {
            id: "store1",
            name: "City Electronics",
            description: "Your one-stop shop for all electronics",
            image: "/placeholder.svg?height=160&width=400",
            rating: 4.5,
            reviewCount: 128,
            distance: 1.2,
            address: "123 Main St, Anytown",
            isOpen: true,
            hours: "9:00 AM - 9:00 PM",
            productCount: 42,
            offers: "Free delivery on orders over $50",
        },
        {
            id: "store2",
            name: "Tech Haven",
            description: "Premium electronics at affordable prices",
            image: "/placeholder.svg?height=160&width=400",
            rating: 4.2,
            reviewCount: 96,
            distance: 2.5,
            address: "456 Oak Ave, Anytown",
            isOpen: true,
            hours: "10:00 AM - 8:00 PM",
            productCount: 38,
        },
        {
            id: "store3",
            name: "Gadget World",
            description: "Latest gadgets and tech accessories",
            image: "/placeholder.svg?height=160&width=400",
            rating: 4.7,
            reviewCount: 215,
            distance: 3.1,
            address: "789 Pine Rd, Anytown",
            isOpen: false,
            hours: "9:00 AM - 7:00 PM",
            productCount: 56,
            offers: "20% off on selected items",
        },
        {
            id: "store4",
            name: "Digital Dreams",
            description: "Cutting-edge technology for modern living",
            image: "/placeholder.svg?height=160&width=400",
            rating: 4.0,
            reviewCount: 72,
            distance: 4.3,
            address: "101 Maple Dr, Anytown",
            isOpen: true,
            hours: "8:00 AM - 10:00 PM",
            productCount: 29,
        },
    ];
};

// Mock products data
const generateMockProducts = (storeId, subcategoryId) => {
    const products = [];

    // Generate different number of products based on store and subcategory
    const productCount = 15 + Math.floor(Math.random() * 10);

    for (let i = 1; i <= productCount; i++) {
        const hasDiscount = Math.random() > 0.7;
        const discount = hasDiscount
            ? Math.floor(Math.random() * 30) + 10
            : null; // 10-40% discount
        const price = Math.floor(Math.random() * 900) + 100; // $100-$999
        const originalPrice = hasDiscount
            ? Math.round(price / (1 - discount / 100))
            : null;

        products.push({
            id: `product-${storeId}-${subcategoryId}-${i}`,
            name: `Product ${i} - ${
                subcategoryId.charAt(0).toUpperCase() + subcategoryId.slice(1)
            }`,
            description: `This is a great product for all your ${subcategoryId} needs. High quality and reliable.`,
            image: "/placeholder.svg?height=200&width=300",
            price: price,
            originalPrice: originalPrice,
            discount: discount,
            rating: (3 + Math.random() * 2).toFixed(1),
            reviewCount: Math.floor(Math.random() * 200) + 5,
            inStock: Math.random() > 0.1,
            popularity: Math.floor(Math.random() * 100),
            dateAdded: new Date(
                Date.now() -
                    Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
            ).toISOString(), // Random date within last 90 days
        });
    }

    return products;
};

// API functions
// export async function fetchCategories() {
//     const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
//     console.log("this is base url : ", apiBaseUrl);
//     await delay(800); // Simulate network delay
//     const result = await fetch(`${apiBaseUrl}/api/v1/product-categories`);
//     console.log("this is all categories : ", result);
//     return mockCategories;
// }

export async function fetchCategories() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${apiBaseUrl}/api/v1/product-categories`;
    console.log("this is base url : ", apiBaseUrl);
    console.log("Final fetch URL: ", url);
    const result = await fetch(url);
    const data = await result.json(); // <- This is critical

    console.log("this is all categories:", data);
    return data;
}

export async function fetchSubcategories(categoryId) {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${apiBaseUrl}/api/v1/product-categories/${categoryId}/subcategories`;
    console.log("this is base url : ", apiBaseUrl);
    console.log("Final fetch URL: ", url);
    const result = await fetch(url);
    const data = await result.json(); // <
    console.log("data of sub : ", data);
    if (!data.success) {
        return [];
    }
    return data.data;
}

export async function fetchNearbyStores(subcategoryId, latitude, longitude) {
    await delay(1000);
    // In a real app, we would use the latitude and longitude to find nearby stores
    // For this mock, we'll just return the same stores regardless of location
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const url = `${apiBaseUrl}/api/v1/store/location/${subcategoryId}`;
    console.log("this is base url : ", apiBaseUrl);
    const body = {
        latitude: latitude,
        longitude: longitude,
    };
    console.log("Final fetch URL: ", url);
    const result = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await result.json();
    console.log("data in  stores : ", data);
    return data;
}

export async function fetchStoreProducts(storeId, subcategoryId) {
    await delay(800);
    return generateMockProducts(storeId, subcategoryId);
}
