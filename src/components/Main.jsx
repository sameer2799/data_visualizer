import React from 'react';
import PageTitle from "./PageTitle";
import Dashboard from "./Dashboard";
import "./css/main.css";


function Main() {
  return (
    <main id='main' className='main'>
        <PageTitle page='Dashboard' />
        <Dashboard />
    </main>
  )
}

export default Main