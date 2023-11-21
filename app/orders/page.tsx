import { getCurrentUser } from "@/actions/getCurrentUser"
import NullData from "../ components/NullData"
import Container from "../ components/Container"
import OrderClient from "./OrderClient"
import getOrdersByUserId from "@/actions/getOrdersByUserId"

const Orders =async()=>{
    const currentUser=await getCurrentUser()
    if(!currentUser){
<<<<<<< HEAD
        return <NullData title="Không thể truy cập"/>
=======
        return <NullData title="Rất tiếc !Quyền truy cập bị từ chối"/>
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    }
    const orders=await getOrdersByUserId(currentUser.id)
    if(!orders){
        return <NullData title="Chưa có đơn đặt hàng nào..."/>
    }
    return (
        <div className="pt-8">
            <Container>
                <OrderClient orders={orders}/>
            </Container>
        </div>
    )
}   
export default Orders