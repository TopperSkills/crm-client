import API from "~/api/API";
import endpoints from "~/api/endpoints";
import type { IUser, IUserQueryParams } from "~/types/user-type";

const ep = endpoints?.api?.users;

class UserService {
  static async createUser(user: IUser) {
    const response = await API.post(ep?.create, user);
    return response?.data;
  } //createUser
  static async updateUser(id: string, user: IUser) {
    const response = await API.put(ep?.update + id, user);
    return response?.data;
  } //updateUser
  
  static async deleteUser(id: string) {
    const response = await API.delete(ep?.update + id);
    return response?.data;
  } //updateUser

  static async hardDeleteUser(id: string) {
    const response = await API.delete(ep?.deleteHard + id);
    return response?.data;
  } //updateUser

  static async getOne(id: string) {
    const response = await API.get(ep?.getOne + id);
    return response?.data;
  } //getOne

  static async getAll(params: IUserQueryParams) {
    const response = await API.get(ep?.getAll, {
      params,
    });
    return response?.data;
  } //getAll
}

export default UserService;
