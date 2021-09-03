import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import {useHistory} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
export const Top=()=>{
    const {setInfo} = useContext(UserContext);
    const history=useHistory();
    const Addfunc=()=>{
        setInfo({isAdmin:true});
        history.push({pathname:"/users"});
    }

    const Genfunc=()=>{
        setInfo({isAdmin:false});
        history.push({pathname:"/users"});
    }
    return(
        <SContainer>
            <h2>toppage</h2>
            <PrimaryButton onClick={Addfunc}>管理者ユーザー</PrimaryButton>
            <PrimaryButton onClick={Genfunc}>一般ユーザー</PrimaryButton>
        </SContainer>
    );
}

const SContainer = styled.div`
    text-align:center;
`;