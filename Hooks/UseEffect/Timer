import { useEffect ,useState} from "react";

function Notifications(){
    const [nt,setNt]=useState(0);

    function increase(){
        setNt(nt+1);
    }
     function decrease(){
        setNt(nt-1);
    }
    useEffect(()=>{
        document.title=nt>0?`${nt} whatsapp`:"whatsapp";
    },[nt]);
    return(
        <>

            <button onClick={increase}>Increase Notification</button>
            <button onClick={decrease}>Decrease Notification</button>
        </>
    );

}
export default Notifications;
