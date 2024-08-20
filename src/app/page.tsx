import AllProducts from '../components/AllProducts';
import MyInfo from '../components/MyInfo';

export default async function Home() {
    const res = await fetch('https://dummyjson.com/products?limit=10000');
    const data = await res.json();
    const products = data.products;

    return (
        <>
            <MyInfo />
            <AllProducts productsData={products} />
        </>
    );
}
