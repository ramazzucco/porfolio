import React, { useEffect, useState } from "react";
import { BrowserRouter as Router , Switch, Route} from "react-router-dom";
import { getLenguage } from "./functions/lenguage";

// Components.
import Index from "./components/Index";
import Moreaboutme from "./components/page/aboutme/Moreaboutme";
import Portfolio from "./components/page/portfolio/Portfolio";
import Loading from "./components/loading/Loading";

function App() {

    const [ lenguage, setLenguage ] = useState('es')
    const [ data, setData ] = useState([])

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');

        if(savedLanguage){
            document.querySelector('html').setAttribute('lang', savedLanguage)
            const dataLenguage = getLenguage(savedLanguage);
            setData(dataLenguage);
        }else{
            document.querySelector('html').setAttribute('lang', lenguage)
            const dataLenguage = getLenguage(lenguage);
            setData(dataLenguage);
        }

    },[lenguage, data])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/Portofolio">
                        {
                            data.header
                                ? <Index lenguage={lenguage} setLenguage={setLenguage} data={{header: data.header, section: data.section}} />
                                : <Loading />
                        }
                    </Route>
                    <Route exact path="/Portofolio/moreaboutme">
                        {
                            data.header
                                ? <Moreaboutme data={data.moreaboutme} />
                                : <Loading />
                        }
                    </Route>
                    <Route exact path="/Portofolio/portfolio/:project">
                        {
                            data.header
                                ? <Portfolio data={data.portfolio} />
                                : <Loading />
                        }
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
