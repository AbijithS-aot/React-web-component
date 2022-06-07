import { httpPOSTRequest } from "../httpRequestHandler";
import { API } from "../endpoints";
export const publicApplicationCreate = (data,...rest)=>{
    const url = API.PUBLIC_APPLICATION_CREATE;
    console.log("url",url)
    return  httpPOSTRequest(url,data);
}