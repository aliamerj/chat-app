import { userRequest } from "../requestMethods";
import { Ali } from "../__FAKE_DATA/apiData";
interface Conversion {
  _id: string;
  createdAt: string;
  members: string[];
  updatedAt: string;
}

const userId = Ali._id;
export const getUserConversation = async (): Promise<Conversion[]> => {
  try {
    const res = await userRequest.get<Conversion[]>("/conversation/" + userId);
    return res.data;
  } catch (error: any) {
    return error.message;
  }
};
