'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Product } from '@/utils/types';

export default function MyInfo() {
    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const storeName = "Adil's Store"; // Replace with your store name

    return (
        <nav className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
                <Link href="/">{storeName}</Link>
            </div>
            <div>
                <Link href="/cart">
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        Cart ({cart.length})
                    </button>
                </Link>
            </div>
        </nav>
    );
}
