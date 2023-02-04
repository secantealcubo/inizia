// React Required
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import CorporateBusiness from './home/CorporateBusiness';
// Dark Home Layout 
// Element Layout
import ServiceDetails from "./elements/ServiceDetails";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";


// Blocks Layout

import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import HttpsRedirect from 'react-https-redirect';
class Root extends Component{
    render(){
        return(
            <HttpsRedirect>
                <BrowserRouter basename={'/'}>
                    <PageScrollTop>
                        <Switch>
                            <Route exact path={`${process.env.PUBLIC_URL}/`} component={CorporateBusiness}/>
                            {/* Element Layot */}
                            <Route exact path={`${process.env.PUBLIC_URL}/service-details`} component={ServiceDetails}/>
                            <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>                        
                            <Route path={`${process.env.PUBLIC_URL}/404`} component={error404}/>
                            <Route component={error404}/>
                        </Switch>
                    </PageScrollTop>
                </BrowserRouter>
            </HttpsRedirect>
        )
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();