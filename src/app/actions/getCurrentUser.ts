import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import prisma from "../../../vendor/db";

export default async function getCurrentUser(){
    try{
        const session=await getServerSession(authOptions);
        if(!session?.user?.email){
            return null
        }
        const currentUser=await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
        })
        return currentUser;
    }
    catch(error:any){
        return null;
    };
     
}