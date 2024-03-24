import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'] ,weight :['400', '700']})
import NavBar from './ components/nav/NavBar'
import Footer from './ components/footer/Footer'
import CartProvider from './ components/providers/CartProvider'
import { ToastBar, Toaster } from 'react-hot-toast'
import { getCurrentUser } from '@/actions/getCurrentUser'


export const metadata: Metadata = {
  title: 'LuxeGlobal',
  description: 'Web bán quần áo',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const currentUser = await getCurrentUser();
  console.log("user<<<",currentUser);

  return (
    <html lang="vi">
      <body className={`${poppins.className} 
      text-slate-700`}>
        
        <Toaster toastOptions={
          {
            style:{background:'rgb(51 65 85)',
          color: '#fff',
        },}}
          />
         <CartProvider>
        <div className="flex flex-col min-h-screen">
          <NavBar/>
        <main className="flex-grow ">{children}</main>
        <Footer/>
        </div>
        </CartProvider>

        <div dangerouslySetInnerHTML={{__html:`
            <script>
              window.fbAsyncInit = function() {
                    FB.init({
                        appId: "1784956665094089",
                        xfbml: true,
                        version: "v2.6"
                    });
                };
                (function(d, s, id){
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) { return; }
                    js = d.createElement(s); js.id = id;
                    js.src = "//connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js";
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'facebook-jssdk'));
            </script>
          <div class="fb-customerchat" page_id="264410966755812"></div>
        `}}>
            
        </div>
      </body>
      
    </html>
  )
}

