import React from "react";
import "milligram";
import Balance from "./features/balance/containers/Balance";
import Header from "./components/header/header";
import Tabs from "./components/tabs/tabs";
import Transactions from "./features/transactions/containers/Transactions";
import Contacts from "./features/contacts/containers/Contacts";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSpinner)



function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Balance />
                <Tabs>
                    <Transactions />
                    <Contacts />
                </Tabs>
            </div>
        </div>
    );
}

export default App;
