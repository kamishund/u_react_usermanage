import { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../provider/UserProvider";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import {Seachinput} from "../molecules/SeachInput";
import { Usercard } from "../organism/user/Usercard";
const users = [...Array(10).keys()].map(((val)=>{
    return{
    id:val,
    name:`${val}shundai`,
    image:"https://source.unsplash.com/n4xxXHZllVc",
    email:"12345@.com",
    phone:"93-3-33-33",
    company:{
      name:"testcompany"
    },
    website:"https://google.comn"
    }
}))


export const Users=()=>{
   const {userInfo,setInfo} =useContext(UserContext);
    const onswitch = ()=>{
        setInfo({isAdmin:!userInfo.isAdmin});
    }
    return(
        <SContainer>
            <PrimaryButton onClick={onswitch}>切り替え</PrimaryButton>
            <SUserarea>
            <Seachinput />
            {
                users.map((user)=>(
                <Usercard key={user.id} user={user} />
                
                ))
            }
            </SUserarea>
        </SContainer>
    );
}

const SContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:24px;
`;


const SUserarea = styled.div`
    paddibng-top:40px;
    width:100%;
    display:grid;
    grid-template-column:repeat(auto-fit,minmax(200px,1fr));
    grid-gap:20px;
    `;
