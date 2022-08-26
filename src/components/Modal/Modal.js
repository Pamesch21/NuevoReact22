import "./Modal.scss"
import { BsFillBackspaceReverseFill } from "react-icons/bs";


const Modal= ({children, close}) => {
return (

    <div className='modal-custom' > 
    < BsFillBackspaceReverseFill onClick={() => close(false)}/>  
       {children}
    </div>
)

}
export default Modal