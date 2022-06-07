import { httpPOSTRequest } from "../httpRequestHandler";
import { API } from "../endpoints";
export const publicApplicationCreate = (data,...rest)=>{
    const url = API.PUBLIC_APPLICATION_CREATE;
    return  httpPOSTRequest(url,data);
}