
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";

// Import the pages

import Page1 from "./component/pages/Home"
import Page2 from "./component/pages/About"
import Page3 from "./component/pages/contact"


// Import css
import './App.css'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    
                    <Route exact path="/" element={<Page1/>} />
                    <Route exact path="abo" element={ <Page2/>} />
                    <Route exact path="Con" element={<Page3/>} />
                    
                </Routes>
                
              
                       
                
            </Router>
        </div>
        
    );
}
export default App;


