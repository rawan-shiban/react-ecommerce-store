import React from 'react'

function ProductImages({product}) {
  return (
     <div className="imgs-item">
  
              <div className="images">
                <div className="big-img">
                  <img
                    id="big-img"
                    src={product.images?.[0] || 'default-image.jpg'}
                    alt={product.title}
                  />
                </div>
  
                <div className="sm-img">
                  {product.images?.map((img, index) => (  
                    <div className="img-div-sm" key={index}>
                    <img
                      key={index}
                      src={img}
                      alt={product.title}
                      onClick={() => (document.getElementById("big-img").src = img)}
                      style={{ cursor: 'pointer', width: '50px', margin: '5px' }}
                    />
                    </div>
                  ))}
  
                </div>
              </div>
            </div>
  )
}

export default ProductImages