// import { Product } from './types';

// export const products: Product[] = [
//     {
//         id: '1',
//         name: 'iPhone 15 Pro Max',
//         price: '300k',
//         category: 'mobiles',
//         image: 'https://imageio.forbes.com/specials-images/imageserve/641397e79f04500b85460b8f/Apple--iPhone-15--iPhone-15-Pro-Max--iPhone-15-Pro--iPhone-15-Pro-design--iPhone-15/0x0.jpg?format=jpg&crop=923,692,x364,y0,safe&width=960',
//         description: 'A high-end smartphone with advanced features.'
//     },
//     {
//         id: '2',
//         name: '125 Bike',
//         price: '150k',
//         category: 'bikes',
//         image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx8jn_bVcFzX9IeT0DSr15Zgmsw9rqyiGGlg&s',
//         description: 'A durable and versatile mountain bike.'
//     },
//     {
//         id: '3',
//         name: 'Tesla Model S',
//         price: '1.2M',
//         category: 'cars',
//         image: 'https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg',
//         description: 'A high-performance electric vehicle with autonomous driving capabilities.'
//     },
//     {
//         id: '4',
//         name: 'MacBook Pro 16"',
//         price: '400k',
//         category: 'laptops',
//         image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911_GEO_IN?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1572654985520',
//         description: 'A powerful laptop for professionals with a high-resolution display.'
//     },
//     {
//         id: '5',
//         name: 'Leather Jacket',
//         price: '20k',
//         category: 'clothes',
//         image: 'https://cdn.shopify.com/s/files/1/1031/0451/products/1990_leather_rider_s_06_1024x1024.jpg?v=1552580222',
//         description: 'A stylish leather jacket perfect for any season.'
//     },
//     {
//         id: '6',
//         name: 'Samsung Galaxy S21',
//         price: '200k',
//         category: 'mobiles',
//         image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/galaxy-s21/gallery/levant-galaxy-s21-5g-g991-sm-g991bzvdmea-thumb-368530274?$320_320_PNG$',
//         description: 'A flagship smartphone with advanced camera capabilities.'
//     },
//     {
//         id: '7',
//         name: 'Ducati Monster',
//         price: '2M',
//         category: 'bikes',
//         image: 'https://ducati.com/cms-web/upl/cms/family//Monster-MY21-DYN-R.jpg',
//         description: 'A high-performance motorcycle designed for enthusiasts.'
//     },
//     {
//         id: '8',
//         name: 'Audi A6',
//         price: '1.5M',
//         category: 'cars',
//         image: 'https://www.audi.com/content/dam/gbp2/ci/Deutschland/Footage/MY2022/A6_Limousine_MY2022_1694x953.jpg',
//         description: 'A luxury sedan with advanced features and a comfortable interior.'
//     },
//     {
//         id: '9',
//         name: 'HP Spectre x360',
//         price: '250k',
//         category: 'laptops',
//         image: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06937459.png',
//         description: 'A convertible laptop with a sleek design and powerful performance.'
//     },
//     {
//         id: '10',
//         name: 'Denim Jeans',
//         price: '5k',
//         category: 'clothes',
//         image: 'https://cdn.pixabay.com/photo/2016/03/09/09/37/denim-1245961_960_720.jpg',
//         description: 'Comfortable and stylish denim jeans for everyday wear.'
//     },
//     {
//         id: '11',
//         name: 'Wireless Bluetooth Headphones',
//         price: '59.99',
//         category: 'electronics',
//         image: 'https://via.placeholder.com/150',
//         description: 'High-quality wireless headphones with noise cancellation and long battery life.'
//     },
//     {
//         id: '12',
//         name: 'Smartphone Stand',
//         price: '19.99',
//         category: 'accessories',
//         image: 'https://via.placeholder.com/150',
//         description: 'Adjustable smartphone stand perfect for video calls, watching videos, and more.'
//     },
//     {
//         id: '13',
//         name: 'Portable Charger',
//         price: '29.99',
//         category: 'electronics',
//         image: 'https://via.placeholder.com/150',
//         description: 'Compact and powerful portable charger with fast charging capabilities.'
//     },
//     {
//         id: '14',
//         name: 'Running Shoes',
//         price: '89.99',
//         category: 'footwear',
//         image: 'https://via.placeholder.com/150',
//         description: 'Comfortable and durable running shoes for all types of runners.'
//     },
//     {
//         id: '15',
//         name: 'Yoga Mat',
//         price: '24.99',
//         category: 'fitness',
//         image: 'https://via.placeholder.com/150',
//         description: 'Non-slip yoga mat with cushioning for ultimate comfort during workouts.'
//     },
//     {
//         id: '16',
//         name: 'Water Bottle',
//         price: '14.99',
//         category: 'accessories',
//         image: 'https://via.placeholder.com/150',
//         description: 'Reusable water bottle with a built-in filter and leak-proof design.'
//     },
//     {
//         id: '17',
//         name: 'Laptop Backpack',
//         price: '49.99',
//         category: 'bags',
//         image: 'https://via.placeholder.com/150',
//         description: 'Stylish and functional laptop backpack with multiple compartments.'
//     },
//     {
//         id: '18',
//         name: 'Smartwatch',
//         price: '199.99',
//         category: 'electronics',
//         image: 'https://via.placeholder.com/150',
//         description: 'Feature-packed smartwatch with health tracking and customizable watch faces.'
//     },
//     {
//         id: '19',
//         name: 'Desk Lamp',
//         price: '39.99',
//         category: 'home',
//         image: 'https://via.placeholder.com/150',
//         description: 'LED desk lamp with adjustable brightness and color temperature settings.'
//     },
//     {
//         id: '20',
//         name: 'Gaming Mouse',
//         price: '49.99',
//         category: 'electronics',
//         image: 'https://via.placeholder.com/150',
//         description: 'High-precision gaming mouse with customizable buttons and RGB lighting.'
//     }
// ];

// export default products;
