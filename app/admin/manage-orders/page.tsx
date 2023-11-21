import Container from "@/app/ components/Container";
import ManageOrdersClient from "./ManageOrdersClient";
import getProducts from "@/actions/getProducts";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/ components/NullData";
import getOrders from "@/actions/getOrders";

const ManageOrders = async () => {

    const orders = await getOrders();
    const currentUser = await getCurrentUser();

    if(!currentUser||currentUser.role != 'ADMIN')
    {
<<<<<<< HEAD
        return <NullData title='Không thể truy cập'/>;
=======
        return <NullData title='Rất tiếc! Quyền truy cập bị từ chối'/>;
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    }
    return (  <div className="pt-8"><Container>
        <ManageOrdersClient orders={orders}/>
        </Container>
        </div>);
}
 
export default ManageOrders;