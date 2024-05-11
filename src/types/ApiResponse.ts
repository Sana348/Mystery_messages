import {Message} from "@/model/User"


export interface ApiResponse{
    success : boolean;
    message: string;
    isAcceptiongMessages?:boolean
    messages : Array<Message>
}