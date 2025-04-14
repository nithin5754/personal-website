import { format } from "date-fns";


export const dateConvertorFunc=(isoDate:string):string=>{
   const formatted = format(new Date(isoDate), 'd MMM yyyy');

   return formatted
}