import Link from 'next/link';
import { Product as ProductType } from '../utils/types';

interface ProductProps {
    product: ProductType;
}

export default function Product({ product }: ProductProps) {
    return (
        <div className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link href={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-t-lg cursor-pointer" />
                <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h2>
                <p className="text-gray-900 mb-2">${product.price}</p>
                <b className="text-gray-900 mb-2">{product.title}</b>
                <i className='text-gray-900 mb-2'>{product.description}</i>
            </Link>
            <Link href={`/product/${product.id}`}>
                <button className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                    Buy Now
                </button>
            </Link>
        </div>
    );
}
