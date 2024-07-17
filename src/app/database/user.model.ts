import { EUserRole, EUserStatus } from "@/types/enums";
import { Document, model, models, Schema } from "mongoose";

// Định nghĩa interface User với các thuộc tính cần thiết
interface User extends Document {
    clerkId: string;
    name: string;
    username: string;
    email_address: string;
    avatar: string;
    // khoa ngoai
    courses: Schema.Types.ObjectId[];
    status: EUserStatus;
    role: EUserRole;
    createdAt: Date;
}

// Định nghĩa schema cho User
const userSchema = new Schema<User>({
    clerkId: {
        type: String,
    },
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email_address: {
        type: String,
    },
    avatar: {
        type: String,
    },
    courses: [{
        type: Schema.Types.ObjectId,
        // reference  Liên kết tới bảng Course
        ref: "Course"
    },],
    createdAt: {
        type: Date,
        default: Date.now, // Đặt giá trị mặc định là thời gian hiện tại
    },
    role: {
        type: String,
        // Object.values la lay 1 trong nhung cai do (tra ra mang)
        enum: Object.values(EUserRole), // Ràng buộc giá trị thuộc enum EUserRole
        default: EUserRole.USER // Giá trị mặc định là USER
    },
    status: {
        type: String,
        // Object.values la lay 1 trong nhung cai do (tra ra mang)
        enum: Object.values(EUserStatus), // Ràng buộc giá trị thuộc enum EUserStatus
        default: EUserStatus.ACTIVE, // Giá trị mặc định là ACTIVE
    } 
})

// Kiểm tra xem model User đã tồn tại hay chưa, nếu chưa thì tạo mới
const User = models.User || model("User", userSchema);
export default User;