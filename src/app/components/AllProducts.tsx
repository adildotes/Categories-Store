'use client'
import { useState, useEffect } from 'react';
import { Product as ProductType } from '../utils/types';
import Product from './Product';
import Categories from './Categories';

interface AllProductsProps {
    productsData: ProductType[];
}

export default function AllProducts({ productsData }: AllProductsProps) {
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(productsData);
    const rowCategories = productsData.map((product: { category: any; }) => product.category);
    const categories = ['all', ...new Set(rowCategories)];
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(productsData);
        } else {
            setFilteredProducts(productsData.filter(product => product.category === selectedCategory));
        }
    }, [selectedCategory, productsData]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-6">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => setSelectedCategory('all')}
                >
                    All Data
                </button>
            </div>
            <Categories categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
