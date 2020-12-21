import React from 'react';

const ProductBreadCrumb = (title) => {
    return (
        <div className="products-breadcrumb ">
            <div className='d-block'>
                <ul className='mb-0'>
                    <li><i className="fas fa-home" aria-hidden="true"/><a href="index.html">Home</a><span>|</span>
                    </li>
                    <li>{title}</li>
                </ul>
            </div>

        </div>
    );
};


export default ProductBreadCrumb;
