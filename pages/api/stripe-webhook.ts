import { NextApiRequest, NextApiResponse } from "next"
import { buffer } from "stream/consumers"
import Stripe from "stripe"


export const config={
    api:{
        bodyParser:false
    }
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string,{
apiVersion:'2023-10-16'
})
export default async function handler(req:NextApiRequest,
    res:NextApiResponse
    ){
        const buf=await buffer(req)
        const sig=req.headers['strict-signature']
        if(!sig)
        {
            return res.status(400).send("Thiếu chữ ký sọc ")
        }
        let event :Stripe.Event
        try {
            event=stripe.webhooks.constructEvent(
                buf,sig,process.env.STRIPE_WEBHOOK_SECRET!
            );
        }catch(err){
            return res.status(400).send("Lỗi móc trang web"+err);
        }
        switch(event.type){
            case 'charge.succeeded':
                const charge:any=event.data.object as Stripe.Charge
                 if(typeof charge.payment_intent =='string'){
                    await prisma?.order.update({
                        where:{paymentIntentId:charge.payment_intent},
                        data:{status:'complete',address:charge.shipping?.address},
                    });
                 }
                 break
                 default:
                    console.log('Loại sự kiện chưa được xử lý:'+event.type);
                }
            res.json({received:true});
            }
