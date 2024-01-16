import { User } from "@/models/user.model";
export class UserService {
  async list() {
    const users = await User.find();
    return users;
  }
}
