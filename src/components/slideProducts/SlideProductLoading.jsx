import React from 'react'

function SlideProductLoading() {
    return (
        <div className='loading-SlideProduct'>
            <div className="slide-products slide">
                <div className="container">
                    <div className="top-slide">
                        <h2 className='skeltion'></h2>
                        <p  className='skeltion'></p>
                    </div>

                    <div className="products-loading">
                        <div className="product">
                            <div className="img-product skeltion"></div>
                            <div className="content"></div>
                        </div>

                           <div className="product">
                            <div className="img-product skeltion"></div>
                            <div className="content"></div>
                        </div>

                           <div className="product">
                            <div className="img-product skeltion"></div>
                            <div className="content skeltion"></div>
                            <div className="content skeltion"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideProductLoading