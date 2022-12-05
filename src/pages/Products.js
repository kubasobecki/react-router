import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <section>
            <h1>The Products Page</h1>
            <ul>
                <li>
                    <Link to="/products/p1">
                        High-End Gaming PC with RTX 4090 and Intel i9-13900KF
                    </Link>
                </li>
                <li>
                    <Link to="/products/p2">Book</Link>
                </li>
                <li>
                    <Link to="/products/p3">Carpet</Link>
                </li>
            </ul>
        </section>
    );
};

export default Products;
