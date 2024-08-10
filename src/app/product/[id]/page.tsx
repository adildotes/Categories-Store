export default async function ProductDetails({ params }) {
    const { id } = params;

    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);

        if (!res.ok) {
            throw new Error(`Failed to fetch product data: ${res.status}`);
        }

        const product = await res.json();

        if (!product) {
            return <div>Product not found: {id}</div>;
        }

        return (
            <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg bg-white">
                <img src={product.thumbnail} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-t-lg" />
                <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                <p className="text-gray-900">${product.price}</p>
                <p className="text-gray-600">{product.description}</p>
            </div>
        );
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }
}
