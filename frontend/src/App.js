import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Signup from "./components/signup";
import Transactions from "./components/transactions";
import Cards from "./components/cards";
import Account from "./components/account";
import Settings from "./components/settings";
import TopupForm from "./components/topupForm";
import PayForm from "./components/payform";
import TransferForm from "./components/transferform";
import NewUserContent from "./layouts/newuser_maincontent";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = false;

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-card" element={<NewUserContent />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/topup" element={<TopupForm />} />
          <Route path="/pay" element={<PayForm />} />
          <Route path="/transfer" element={<TransferForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
