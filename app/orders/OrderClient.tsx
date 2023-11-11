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
                amount:formatPrice(order.amount/100),
                paymentStatus:order.status,
                date:moment(order.createDate).fromNow(),
                deliveryStatus:order.deliveryStatus,
            };
        });
    }
    const columns:GridColDef[]=[
        {field:'id',headerName:'ID',width:220},
        {field:'customer',headerName:'Customer Name',width:130},
        {field:'amount',headerName:'Price(USD)',width:130,renderCell:(params)=>{
            return(<div className="font-bold text-slate-800">{params.row.amount}</div>);
        },
    },
    {field:'deliveryStatus',headerName:"Delivery Status",width:130,renderCell:(params)=>{
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
        {field:'paymentStatus',headerName:"Payment Status",width:130,renderCell:(params)=>{
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
    headerName:"Date",
    width:130,
},
    {field:"action",headerName:"Actions",width:200,renderCell:(params)=>{
        return(<div className="flex justify-between gap-4 w-full">
           
            <ActionBtn icon={MdRemoveRedEye} onClick={()=>{router.push(`/order/${params.row.id}`)}}/>
            
            </div>);}
    }
];
 
    return ( <div className="max-w-[1150px] m-auto text-x1">
        <div className="mb-4 mt-8">
            <Heading title="Manage Orders" center />
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


