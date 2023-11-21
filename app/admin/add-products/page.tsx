import Container from "@/app/ components/Container";
import FormWrap from "@/app/ components/products/FormWrap";
import AddProductForm from "./AddProductForm";
import { getCurrentUser } from "@/actions/getCurrentUser";
import NullData from "@/app/ components/NullData";

const AddProducts = async() => {
    const currentUser = await getCurrentUser()
    if(!currentUser || currentUser.role !=="ADMIN"){
<<<<<<< HEAD
        return <NullData title="Không thể truy cập"/>
=======
        return <NullData title="Rất tiếc! Quyền truy cập bị từ chối "/>
>>>>>>> 56946f97d0ecc650cb0506041bde71dc6d7cdaa8
    }
    return (  <div className="p-8 ">
        <Container>
            <FormWrap>
                <AddProductForm/>
            </FormWrap>
            </Container></div>);
}
 
export default AddProducts;