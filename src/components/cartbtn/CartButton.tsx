"use client"
import toast, { Toaster } from 'react-hot-toast';

export const CartButton = (buttontext:string) => {
    const addtocarthandler=()=>{
        toast.success('Item added to cart!', {
            position: 'top-right',
           
        });
    }
  return (
    <div>
        <button onClick={addtocarthandler} className="text-xl bg-[#f7d1a6] border-2 border-[#f7d1a6] text-white hover:bg-white rounded-full py-3 px-6 hover:text-[#f7d1a6] transition duration-300">{buttontext}</button>
        
    </div>
  )
}
