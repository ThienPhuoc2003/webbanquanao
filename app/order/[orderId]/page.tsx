import Container from "@/app/ components/Container";

import ListRating from "@/app/product/[productId]/ListRating";
import getOrderById from "@/actions/getOrderById";
import NullData from "@/app/ components/NullData";
import OrderDetails from "./OrderDetails";

interface IPrams{
    orderId?:string;
}

const Order= async({params}:{params:IPrams}) => {
    const order=await getOrderById(params);
    if(!order)return 
<<<<<<< HEAD
    <NullData  title="Không có đặt hàng"></NullData>
=======
    <NullData  title="Không có đơn hàng"></NullData>
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    return ( 
        <div className="p-8">
            <Container>
               <OrderDetails order={order}/>
            </Container>
        </div>
     );
}
 
export default Order;