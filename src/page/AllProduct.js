import React from 'react'

export default function AllProduct() {
    return (
        <>
            <main className="main">
                <section className="section block-banner-shop">
                    <div className="container">
                        <h1 className="text-56-medium">Shop</h1>
                        <div className="breadcrumbs">
                            <ul>
                                <li> <a href="#">Home </a></li>
                                <li> <a href="#">Shop</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="section block-content-shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="wrapper-overlay" />
                                <div className="box-filters-sidebar">
                                    <h5 className="title-filter">Filter</h5>
                                    <div className="block-filter">
                                        <h6 className="item-collapse">Categories</h6>
                                        <div className="box-collapse scrollFilter">
                                            <ul className="list-filter-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Womens <span className="neutral-medium">(12)</span></span><span className="checkmark" />
                                                    </label><span className="arrow-down" />
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Mens <span className="neutral-medium">(9)</span></span><span className="checkmark" />
                                                    </label><span className="arrow-down" />
                                                    <ul>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" /><span className="text-small">Hats<span className="neutral-medium">(4)</span></span><span className="checkmark" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" /><span className="text-small">Glasses <span className="neutral-medium">(3)</span></span><span className="checkmark" />
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className="cb-container">
                                                                <input type="checkbox" /><span className="text-small">Jeans<span className="neutral-medium">(2)</span></span><span className="checkmark" />
                                                            </label>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Kids <span className="neutral-medium">(15)</span></span><span className="checkmark" />
                                                    </label><span className="arrow-down" />
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Gifts <span className="neutral-medium">(10)</span></span><span className="checkmark" />
                                                    </label><span className="arrow-down" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block-filter">
                                        <h6 className="item-collapse">Colors </h6>
                                        <div className="box-collapse scrollFilter">
                                            <ul className="list-colors">
                                                <li className="active">
                                                    <div className="box-colors">
                                                        <div className="item-color color-4" />
                                                        <label>Blue</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="box-colors">
                                                        <div className="item-color color-3" />
                                                        <label>Grey</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="box-colors">
                                                        <div className="item-color color-5" />
                                                        <label>Red</label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="box-colors">
                                                        <div className="item-color color-6" />
                                                        <label>Yellow</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block-filter">
                                        <h6 className="item-collapse">Size </h6>
                                        <div className="box-collapse scrollFilter">
                                            <div className="block-size">
                                                <div className="list-sizes"><span className="item-size">XS </span><span className="item-size active">S </span><span className="item-size">M </span><span className="item-size">XL </span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-filter">
                                        <h6 className="item-collapse">Brand </h6>
                                        <div className="box-collapse scrollFilter">
                                            <ul className="list-filter-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Adidas</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Chloe</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Kendo</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Nike</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">Adidas</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="block-filter">
                                        <h6 className="item-collapse">Price </h6>
                                        <div className="box-collapse scrollFilter">
                                            <ul className="list-filter-checkbox">
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">$10.00 - $49.00</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">$50.00 - $99.00</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">$100.00 - $199.00</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                                <li>
                                                    <label className="cb-container">
                                                        <input type="checkbox" /><span className="text-small">$200.00 +</span><span className="checkmark" />
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="box-filter-top">
                                    <div className="show-sm"> <a className="btn-open-filter" href="#">Filter </a></div>
                                    <div className="number-product">
                                        <p className="body-p2 neutral-medium-dark">Showing 9 of 18 products</p>
                                    </div>
                                    <div className="box-sort">
                                        <div className="box-sortby d-flex align-items-center">
                                            <div className="dropdown dropdown-sort">
                                                <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false">Default Sorting</button>
                                                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort" style={{ margin: '0px' }}>
                                                    <li><a className="dropdown-item active" href="#">Default Sorting</a></li>
                                                    <li><a className="dropdown-item" href="#">Oldest products</a></li>
                                                    <li><a className="dropdown-item" href="#">Comments products </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box-view-style"> <a className="view-type view-2" href="#" data-col={2} /><a className="view-type view-3 active" href="#" data-col={3} /><a className="view-type view-4" href="#" data-col={4} /><a className="view-type view-5" href="#" data-col={5} /></div>
                                    </div>
                                </div>
                                <div className="box-your-filter">
                                    <div className="block-text-filter"><span className="body-p2 neutral-medium-dark">Your filter</span></div>
                                    <div className="block-ele-filter"><a className="btn btn-tag-filter" href="#">XS<span className="close-tag" /></a><a className="btn btn-tag-filter" href="#">Women<span className="close-tag" /></a><a className="clear-filter link-underline" href="#">Clear All</a></div>
                                </div>
                                <div className="box-list-products">
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product1.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$16.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product2.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$25.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product3.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$26.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product4.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$15.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product5.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$27.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product6.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$67.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product7.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$87.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product8.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$34.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-item">
                                        <div className="cardProduct wow fadeInUp">
                                            <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product2.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                                <div className="button-select"><a href="#">Select Options</a></div>
                                                <div className="box-quick-button"><a className="btn" href="#">
                                                    <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_116_452)">
                                                            <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_116_452">
                                                                <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg></a><a className="btn" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_200_1102)">
                                                                <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_200_1102">
                                                                    <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a><a className="btn preview-product" href="#">
                                                        <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0_91_73)">
                                                                <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_91_73">
                                                                    <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg></a></div>
                                            </div>
                                            <div className="cardInfo"><a href="#">
                                                <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                                <p className="body-p2 cardDesc">$29.00</p>
                                                <div className="box-colors">
                                                    <div className="item-color color-1" />
                                                    <div className="item-color color-2" />
                                                    <div className="item-color color-3" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-50">
                                    <nav className="box-pagination">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link page-prev" href="#">
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                                                </svg></a></li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link active" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                                            <li className="page-item"><a className="page-link" href="#">10</a></li>
                                            <li className="page-item"><a className="page-link page-next" href="#">
                                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                                </svg></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section block-may-also-like">
                    <div className="container">
                        <div className="text-center">
                            <h3 className="mb-60">Recently Viewed Products</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="cardProduct wow fadeInUp">
                                    <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product8.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                        <div className="button-select"><a href="#">Select Options</a></div>
                                        <div className="box-quick-button"><a className="btn" href="#">
                                            <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_116_452)">
                                                    <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_116_452">
                                                        <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                    </clipPath>
                                                </defs>
                                            </svg></a><a className="btn" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_200_1102)">
                                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_200_1102">
                                                            <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a><a className="btn preview-product" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_91_73)">
                                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_91_73">
                                                            <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a></div>
                                    </div>
                                    <div className="cardInfo"><a href="#">
                                        <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                        <p className="body-p2 cardDesc">$16.00</p>
                                        <div className="box-colors">
                                            <div className="item-color color-1" />
                                            <div className="item-color color-2" />
                                            <div className="item-color color-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cardProduct wow fadeInUp">
                                    <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product7.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                        <div className="button-select"><a href="#">Select Options</a></div>
                                        <div className="box-quick-button"><a className="btn" href="#">
                                            <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_116_452)">
                                                    <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_116_452">
                                                        <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                    </clipPath>
                                                </defs>
                                            </svg></a><a className="btn" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_200_1102)">
                                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_200_1102">
                                                            <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a><a className="btn preview-product" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_91_73)">
                                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_91_73">
                                                            <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a></div>
                                    </div>
                                    <div className="cardInfo"><a href="#">
                                        <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                        <p className="body-p2 cardDesc">$16.00</p>
                                        <div className="box-colors">
                                            <div className="item-color color-1" />
                                            <div className="item-color color-2" />
                                            <div className="item-color color-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cardProduct wow fadeInUp">
                                    <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product6.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                        <div className="button-select"><a href="#">Select Options</a></div>
                                        <div className="box-quick-button"><a className="btn" href="#">
                                            <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_116_452)">
                                                    <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_116_452">
                                                        <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                    </clipPath>
                                                </defs>
                                            </svg></a><a className="btn" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_200_1102)">
                                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_200_1102">
                                                            <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a><a className="btn preview-product" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_91_73)">
                                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_91_73">
                                                            <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a></div>
                                    </div>
                                    <div className="cardInfo"><a href="#">
                                        <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                        <p className="body-p2 cardDesc">$16.00</p>
                                        <div className="box-colors">
                                            <div className="item-color color-1" />
                                            <div className="item-color color-2" />
                                            <div className="item-color color-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="cardProduct wow fadeInUp">
                                    <div className="cardImage"><a href="#"><img className="imageMain" src="assets/imgs/page/homepage1/product5.png" alt="guza" /><img className="imageHover" src="assets/imgs/page/homepage1/product1-hover.png" alt="guza" /></a>
                                        <div className="button-select"><a href="#">Select Options</a></div>
                                        <div className="box-quick-button"><a className="btn" href="#">
                                            <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_116_452)">
                                                    <path d="M14.001 6.52898C16.35 4.41998 19.98 4.48998 22.243 6.75698C24.505 9.02498 24.583 12.637 22.479 14.993L13.999 23.485L5.52101 14.993C3.41701 12.637 3.49601 9.01898 5.75701 6.75698C8.02201 4.49298 11.645 4.41698 14.001 6.52898ZM20.827 8.16998C19.327 6.66798 16.907 6.60698 15.337 8.01698L14.002 9.21498L12.666 8.01798C11.091 6.60598 8.67601 6.66798 7.17201 8.17198C5.68201 9.66198 5.60701 12.047 6.98001 13.623L14 20.654L21.02 13.624C22.394 12.047 22.319 9.66498 20.827 8.16998Z" fill />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_116_452">
                                                        <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                    </clipPath>
                                                </defs>
                                            </svg></a><a className="btn" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_200_1102)">
                                                        <path d="M15.375 12.0416L19.5 16.1666L15.375 20.2916L14.1967 19.1133L16.31 16.9991L5.33333 17V15.3333H16.31L14.1967 13.22L15.375 12.0416ZM8.625 3.70831L9.80333 4.88665L7.69 6.99998H18.6667V8.66665H7.69L9.80333 10.78L8.625 11.9583L4.5 7.83331L8.625 3.70831Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_200_1102">
                                                            <rect width={20} height={20} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a><a className="btn preview-product" href="#">
                                                <svg className="d-inline-flex align-items-center justify-content-center" width={28} height={28} viewBox="0 0 28 28" fill xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_91_73)">
                                                        <path d="M20.031 18.617L24.314 22.899L22.899 24.314L18.617 20.031C17.0237 21.3082 15.042 22.0029 13 22C8.032 22 4 17.968 4 13C4 8.032 8.032 4 13 4C17.968 4 22 8.032 22 13C22.0029 15.042 21.3082 17.0237 20.031 18.617ZM18.025 17.875C19.2941 16.5699 20.0029 14.8204 20 13C20 9.132 16.867 6 13 6C9.132 6 6 9.132 6 13C6 16.867 9.132 20 13 20C14.8204 20.0029 16.5699 19.2941 17.875 18.025L18.025 17.875Z" fill />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_91_73">
                                                            <rect width={24} height={24} fill="white" transform="translate(2 2)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg></a></div>
                                    </div>
                                    <div className="cardInfo"><a href="#">
                                        <h6 className="text-16-medium cardTitle">Lace Shirt Cut II</h6></a>
                                        <p className="body-p2 cardDesc">$16.00</p>
                                        <div className="box-colors">
                                            <div className="item-color color-1" />
                                            <div className="item-color color-2" />
                                            <div className="item-color color-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}
