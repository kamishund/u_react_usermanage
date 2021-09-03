import { Switch , Route} from "react-router"
import { Top } from "../Components/pages/Top";
import { Users } from "../Components/pages/Users";
import { BrowserRouter } from 'react-router-dom';
import { DefaultLayout } from "../Components/templete/Default";
import { HeaderOnly } from "../Components/templete/HeaderOnly";

export const Router=()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <DefaultLayout>
                    <Top />
                </DefaultLayout>
            </Route>

            <Route exact path="/users">
                <HeaderOnly>
                    <Users />
                </HeaderOnly>
            </Route>
        </Switch>
        </BrowserRouter>
        
    );
}