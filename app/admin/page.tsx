import getOrders from "@/actions/getOrders";
import getProducts from "@/actions/getProducts";
import Summary from "./Summary"
import getUsers from "@/actions/getUsers";
import { Container } from "@mui/material";
import getGraphData from "@/actions/getGraphData";
import BarGraph from "./BarGraph";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "../ components/NullData";

const Admin =async () => {
    const currentUser = await getCurrentUser();
    if(!currentUser||currentUser.role != 'ADMIN')
    {
        return <NullData title='Không thể truy cập'/>;
    }
    const products=await getProducts({category:null})
    const orders= await getOrders()
    const users= await getUsers()
    const graphData=await getGraphData()
    return ( 
    <div className="pt-8">
        <Container>
            <Summary products={products} orders={orders} users={users}/>  
            <div className="mt-4 mx-auto max-w-[1150px]">
                <BarGraph data={graphData}/>
            </div>
        </Container> 
    </div> );
}
 
export default Admin