'use client'

import { Order,  User } from "@prisma/client";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { formatPrice } from "@/utils/formatPrice";
import { MdAccessTimeFilled, MdCached, MdCancel, MdClose, MdDelete, MdDeliveryDining, MdDone, MdRemoveRedEye } from "react-icons/md";
import Status from "@/app/ components/Status";
import ActionBtn from "@/app/ components/ActionBtn";
import Heading from "@/app/ components/Heading";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import moment from "moment";


interface OrdersClientProps{
    orders:ExtendedOrder[]
}
type ExtendedOrder = Order&{
    user:User
}
const OrdersClient:React.FC<OrdersClientProps> = ({orders}) => {
 const router=useRouter();
    let rows:any=[]
    if(orders)
    {
        rows=orders.map((order)=>{
            return{
                id:order.id,
                customer:order.user.name,
                amount:formatPrice(order.amount),
                paymentStatus:order.status,
                date:moment(order.createDate).fromNow(),
                deliveryStatus:order.deliveryStatus,
            };
        });
    }
    const columns:GridColDef[]=[
        {field:'id',headerName:'ID',width:220},
        {field:'customer',headerName:'Tên',width:130},
        {field:'amount',headerName:'Giá(VND)',width:130,renderCell:(params)=>{
            return(<div className="font-bold text-slate-800">{params.row.amount}</div>);
        },
    },
    {field:'deliveryStatus',headerName:"Trạng thái đơn hàng ",width:130,renderCell:(params)=>{
        return(<div>{params.row.deliveryStatus=='pending'?
            (
            <Status text="pending"
            icon={MdAccessTimeFilled}
            bg="bg-teal-200"
            color="text-teal-700"
            />
            ):params.row.deliveryStatus=='dispatched'?(
                <Status text="completed" icon={MdDeliveryDining}
                bg="bg-purple-200"
                color="text-purple-700"
                />
                ): params.row.deliveryStatus=='delivered'?
                (  <Status text="dispatched" 
                icon={MdDone}
                bg="bg-green-200"
                color="text-green-700"
                />
                ):<></>}
                </div>
        );
    },
    },
        {field:'paymentStatus',headerName:"Trạng thái thanh toán",width:130,renderCell:(params)=>{
    return(<div>{params.row.paymentStatus=='pending'?
        (
        <Status text="pending"
        icon={MdAccessTimeFilled}
        bg="bg-teal-200"
        color="text-teal-700"
        />
        ):  params.row.paymentStatus=='complete'?(
            <Status text="completed" icon={MdDone}
            bg="bg-purple-200"
            color="text-purple-700"
            />
            ) :( <></>  
            
            )}
            </div>
    );
    },
    },
{
    field:"date",
    headerName:"Thời gian",
    width:130,
},
    {field:"action",headerName:"Hoạt động",width:200,renderCell:(params)=>{
        return(<div className="flex justify-between gap-4 w-full">
           
            <ActionBtn icon={MdRemoveRedEye} onClick={()=>{router.push(`/order/${params.row.id}`)}}/>
            
            </div>);}
    }
];
 
    return ( <div className="max-w-[1150px] m-auto text-x1">
        <div className="mb-4 mt-8">
            <Heading title="Quản lý đơn hàng " center />
        </div >
        <div style={{height:600 ,width:"100%"}}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 20]}
        checkboxSelection
        disableRowSelectionOnClick
      /></div> </div>);
}
 
export default OrdersClient;


