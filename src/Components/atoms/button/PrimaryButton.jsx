import {BaseButton} from "./BaseButton";
export const PrimaryButton= (props)=>{
    const {children ,onClick} = props;
    return(
        <button className="primary" onClick={onClick} style={BaseButton}>{children}</button>
    );
}