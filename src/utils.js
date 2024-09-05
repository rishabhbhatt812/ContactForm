import { toast } from "react-toastify";

export const handleSucess=(msg)=>{
  toast.success(msg, {
    position: "top-right",
    style: {
      backgroundColor: "#f0f0f0",
      borderRadius: "10px",
      padding: "10px",
      fontSize: "16px",
      color: "#333",
      
    },
    
  });

}

export const handleError=(msg)=>{
  toast.error(msg,{
    position: "top-right",
    
    style: {
      backgroundColor: "#ff9999",
      borderRadius: "10px",
      padding: "10px",
      fontSize: "16px",
      color: "#fff",
    },
  })
}
