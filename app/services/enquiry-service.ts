import API from "~/api/API";
import endpoints from "~/api/endpoints";
import type { IEnquiry } from "~/types/enquiry-type";

const ep = endpoints?.api?.enquiries;

class EnquiryService {
  static async createEnquiry(enquiry: IEnquiry) {
    const response = await API.post(ep?.create, enquiry);
    return response?.data;
  } //createEnquiry
  static async updateEnquiry(id: string, enquiry: IEnquiry) {
    const response = await API.put(ep?.update + id, enquiry);
    return response?.data;
  } //updateEnquiry

  static async deleteEnquiry(id: string) {
    const response = await API.delete(ep?.update + id);
    return response?.data;
  } //updateEnquiry

  static async hardDeleteEnquiry(id: string) {
    const response = await API.delete(ep?.deleteHard + id);
    return response?.data;
  } //updateEnquiry

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

export default EnquiryService;
