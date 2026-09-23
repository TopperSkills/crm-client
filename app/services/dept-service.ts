import API from "~/api/API";
import endpoints from "~/api/endpoints";
import { type IDept } from "~/types/dept-type";
const ep = endpoints?.api?.depts;

class DeptService {
  static async createDept(dept: IDept) {
    const response = await API.post(ep?.create, dept);
    return response?.data;
  } //createDept

  static async updateDept(id: string, dept: IDept) {
    const response = await API.put(ep?.update + id, dept);
    return response?.data;
  } //updateDept

  static async deleteDept(id: string) {
    const response = await API.delete(ep?.update + id);
    return response?.data;
  } //updateDept

  static async hardDeleteDept(id: string) {
    const response = await API.delete(ep?.deleteHard + id);
    return response?.data;
  } //updateDept

  static async getOne(id: string) {
    const response = await API.get(ep?.getOne + id);
    return response?.data;
  } //getOne

  static async getAll(params: {}) {
    const response = await API.get(ep?.getAll, {
      params,
    });
    return response?.data;
  } //getAll
}

export default DeptService;
