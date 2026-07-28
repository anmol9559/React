import React from 'react'

const ProductsCard = ({ product, del }) => {
  return (
    <div className='gap-4 border-2 h-fit p-2 rounded-lg shadow-md flex flex-col'>
        <div className="w-40 h-60">
            <img src={product.image} 
            alt={product.title} />
        </div>
        <div>
            <h2 className="font-semibold">{product.title.substring(0, 20)}</h2>
            <p className="text-xs">{product.category}</p>
            <p className="text-green-600 ">${product.price.toFixed(2)}</p>
        </div>
            <button onClick={() => del(product.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>

    </div>
  )
}

export default ProductsCard