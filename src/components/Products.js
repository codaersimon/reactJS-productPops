const Products = (props) => {
    return ( 
        <article className="products">
            <img src={props.productImage} alt=""/>
            <div>
                <p>{props.productTitle}</p>
                <p>{props.productPrice}</p>
            </div>
            <a href="#">Buy Now</a>
        </article>
    );
}

export default Products;