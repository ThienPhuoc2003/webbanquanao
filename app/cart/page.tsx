import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../ components/Container";
import CartClient from "./CartClient";
import { SafeUser } from "@/types";

class CurrentUserSingleton {
    private static instance: CurrentUserSingleton | null = null;
    private currentUser: SafeUser | null = null;

  
    static getInstance(): CurrentUserSingleton {
        // Phương thức static này được sử dụng để lấy thể hiện duy nhất của lớp.
        if (!CurrentUserSingleton.instance) {
            CurrentUserSingleton.instance = new CurrentUserSingleton();
        }
        return CurrentUserSingleton.instance;
    }

    async getCurrentUser(): Promise<SafeUser | null> {
        // Hàm này sẽ lấy thông tin người dùng nếu chưa có, sau đó trả về thông tin người dùng.
        if (!this.currentUser) {
            this.currentUser = await getCurrentUser();
        }
        return this.currentUser;
    }
}

const currentUserSingleton = CurrentUserSingleton.getInstance();

const Cart = async () => {
    const currentUser = await currentUserSingleton.getCurrentUser();

    return (
        <div className="pt-8">
            <Container>
                <CartClient currentUser={currentUser} />
            </Container>
        </div>
    );
}

export default Cart;