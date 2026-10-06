//  import Main from './component/Main'
//  import New from './component/New'
// //  import Userdata from './Userdata/user.json'
//  import Footer from './component/Footer'
//  import A from './component/A'
//  import Counter from './component/Counter'
//  import Food from './component/Food'
//  import Array from './component/Array'
//  import Card from './component/Card'
//  import Form from './component/Form'
//  import Fform from './component/Fform'
//  import Uncontrolled from './component/Uncontrolled'
//  import FetchData from './component/FetchData'
//  import Fetchdatan from './component/Fetchdatan'
//  import FetchData1 from './component/FetchData1'
//  import CandUc from './component/CandUc'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './component/Home'
// import About from '.component/About'
import About from './component/About'
import Contact from './component/Contact'
import Service from './component/Service'
 function App(){
  return(
    // <div>
    // {/* <h1> Hello h1</h1>
   
    // <Main></Main>
    // <Footer></Footer> */}
    // {/* <New name ={Userdata[0].name} age={Userdata[0].age}></New> */}
    // {/* <New/> */}
    // {/* <New data = {Userdata}></New> */}
    // {/* <A dataA = "helloo"></A> */}
    // // /* <Array></Array> */}
    // {/* <Food></Food> */}
    // {/* <Card></Card> */}
    // {/* <Form></Form> */}
    // {/* <Fform></Fform> */}
    // {/* <Uncontrolled></Uncontrolled> */}
    // {/* <FetchData></FetchData> */}
    // {/* <Fetchdatan/>   */}
    // {/* <FetchData1/> */}
    // {/* <CandUc></CandUc> */}
    // // </div>
    <div>
      <BrowserRouter>
           <Nav></Nav>
            <Routes>
              <Route path = '/' element = {<Home></Home>}></Route>
              <Route path = '/About' element = {<About></About>}></Route>
              <Route path = '/Contact' element = {<Contact></Contact>}></Route>
              <Route path = '/Service' element = {<Service></Service>}></Route>
            </Routes>
            
            </BrowserRouter>
     
    </div>
   )
}
export default App
