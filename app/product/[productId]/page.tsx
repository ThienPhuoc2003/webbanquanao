import Container from "@/app/ components/Container";

import ProductDetails from "./ProductDetails";
import ListRating from "./ListRating";
import { products } from "@/utils/products";
import getProductById from "@/actions/getProductById";
import NullData from "@/app/ components/NullData";
import AddRating from "./AddRating";
import { use } from "react";
import { getCurrentUser } from "@/actions/getCurrentUser";
interface IPrams{
    productId?: string;
}
const Product  = async({params} : {params:IPrams}) => {
const product =await getProductById(params)
const user = await getCurrentUser()
<<<<<<< HEAD
if(!product) return<NullData title="Rất tiếc! Sản phẩm này có id đã cho không tồn tại"/>
=======
if(!product) return<NullData title="Rất tiếc! Sản phẩm có id đã cho không tồn tại"/>
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    
    return ( <div className="p-8">
        <Container>
            <ProductDetails product={product}/>
            <div className="flex flex-col mt-20 gap-4">
                <AddRating product={product} user={user}/>
                <ListRating product={product}/>
            </div>
        </Container>
    </div> );
}
 
export default Product ;