import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import UpdateDrug from"./pharmacy management/UpdateDrug"
//import Login from "./account management/pages/Login";
//import TcDashboard from "./ticket clerk/pages/TcDashboard";
// import TcMyAccount from "./ticket clerk/pages/TcMyAccount";
//import TcViewAllPatients from "./ticket clerk/pages/TcViewAllPatients";
// import TcSearchAllPatients from "./ticket clerk/pages/TcSearchAllPatients";
// import TcViewPatientDetails from "./ticket clerk/pages/TcViewPatientDetails";
// import TcEditPatientDetails from "./ticket clerk/pages/TcEditPatientDetails";
import pharmacyland from "./pharmacy management/pharmacyland";
//import Example from "./pharmacy management/pharmacyland";
import AddDrugs from "./pharmacy management/addDrugs";
//import AddDG from "./pharmacy management/addDrugs";
import AddIngredients from"./pharmacy management/addIngredients";
//import AddIGD from"./pharmacy management/addIngredients";
import IssueTreatmentItem from"./pharmacy management/issueTreatmentItem";
//import IssueTreat from"./pharmacy management/issueTreatmentItem";
import orderTreatment from"./pharmacy management/orderTreatment";
//import OrderTreat from"./pharmacy management/orderTreatment";
import UpdateIngredient from "./pharmacy management/UpdateIngredients"
import UpdateIssuedTreatmentItem from "./pharmacy management/UpdateIssuedTreatmentItem"
import head from "./pharmacy management/NavBar"
import ViewDrug from "./pharmacy management/viewDrugDeatils";
import ViewIngredient from"./pharmacy management/viewIngredientDetails";
import ViewIssueTreatment from"./pharmacy management/viewIssuedTreatmentItem"
const App = () => {

  return (
    <Router>
      <Switch>
          
          <Route path="/" exact component={pharmacyland}/>
          <Route path="/AddDrugs" exact component={AddDrugs}/>
          <Route path="/AddIngredients" exact component={AddIngredients}/>
          <Route path="/ViewDrug" exact component={ViewDrug}/>
          <Route path="/ViewIngredient" exact component={ViewIngredient}/>
          <Route path="/issueTreatmentitems" exact component={IssueTreatmentItem}/>
          <Route path="/viewTreatmentitems" exact component={ViewIssueTreatment}/>

          <Route path="/drug" component={ViewDrug} />
        
           <Route path="/edit/:id" component={UpdateDrug}/>


          <Route path="/ingredient" component={ViewIngredient} />
        
           <Route path="/update/:id" component={UpdateIngredient}/>

          
           <Route path="/IssueTreatment" component={ViewIssueTreatment} />
        
          <Route path="/updatetreat/:id" component={UpdateIssuedTreatmentItem}/>
         
          
         
       </Switch>
    </Router>
  );
};

export default App;

//<Route path="/AddDrugs" component={AddDrugs}/>
        


/*
login "/"

Ticket clerk
dashboard "/:uid"
my account "/:uid/account"
view all patients "/opd_patients"
search all patients "/:nic/opd_patients"
view patient details "/:nic/opd_details"
edit patient details "/:nic/edit_opd_details"
*/

/*
<Route path="/:uid" exact>
          <TcDashboard />
        </Route>
<Route path="/:uid/account" exact>
          <TcMyAccount />
        </Route>c
        <Route path="/:nic/opd_patients" exact>
          <TcSearchAllPatients />
        </Route>
        <Route path="/:nic/opd_details" exact>
          <TcViewPatientDetails />
        </Route>
        <Route path="/:nic/edit_opd_details" exact>
          <TcEditPatientDetails />
</Route>
*/
