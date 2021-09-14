import Products from './Products'

let product = [
    {
    productImage: "https://mobilenmore.com/wp-content/uploads/2020/09/Apple-iPhone-12-Pro-Max-400x400.jpg",
    productTitle: "iPhone 12",
    productPrice: "749,- €",
    },
    {
    productImage: "https://www.lapstore.de/sd.php?shop=lapstore&d=36070&s=L",
    productTitle: "MacBook Pro (M1)",
    productPrice: "1.389,- €",
    },
    {
    productImage: "https://d2zs7efolu1fdi.cloudfront.net/images/8c/3f/b3/9c/8c3fb39cb05852f1adef4cc16ab9f976.jpg?d=400x400",
    productTitle: `Apple iPad Pro 12.9"`,
    productPrice: "1.290,- €"
    }
]

const ProductList = () => {
    return (  
        <section className="productlist">
            <Products productImage={product[0].productImage} productTitle={product[0].productTitle} productPrice={product[0].productPrice}/>
            <Products productImage={product[1].productImage} productTitle={product[1].productTitle} productPrice={product[1].productPrice}/>
            <Products productImage={product[2].productImage} productTitle={product[2].productTitle} productPrice={product[2].productPrice}/>
        </section>
    );
}

export default ProductList;