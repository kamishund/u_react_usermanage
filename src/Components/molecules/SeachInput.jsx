import { memo } from "react";
import {PrimaryButton} from "../atoms/button/PrimaryButton";
export const Seachinput=memo(()=>{

    return(
        <div className="kensaku">
            <input placeholder="検索条件を入力" />
            <PrimaryButton>検索</PrimaryButton>
        </div>
    );
    
}); 