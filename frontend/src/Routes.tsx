import Dashboarde from 'pages/Dashboarde';
import Home from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <div >
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />    
                    </Route>
                    <Route path="/Dashboard" exact>
                        <Dashboarde />    
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routes;