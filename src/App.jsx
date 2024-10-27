// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
import Available from "./components/Available/Available"
import Players from "./components/Players"
import Selected from "./components/Selected"


function App() {

  const [isActive, setIsActive] = useState({
    available: true,
    status: 'available'
  })

  const handleIsActiveState = (status) => {
    if (status === 'available') {
      setIsActive({
        available: true,
        status: 'available'
      })
    }
    else {
      setIsActive({
        available: false,
        status: 'selected'
      })
    }
  }


  const [balance, setBalance] = useState(0);

  const [selected, setSelected] = useState([]);


  const handleAddBalance = () => {
    setBalance(balance + 2000000);
  }


  const handleReduceBalance = (price, player) => {
    if (balance >= price && selected.length < 6) {
      if (selected.find(randomPlayer => randomPlayer.playerId === player.playerId)) {
        toast.warn(`${player.name} already selected`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }
      else {
        setBalance(balance - price);
        setSelected([...selected, player]);
        toast.success(`CONGRATS!! ${player.name} is selected in your squad`, {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

    }
    else {
      toast.error('OPERATION FAILED!!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }


  const handleReduceSelected = (p, selectedId) => {
    const newSelected = selected.filter(player => player.playerId !== selectedId);
    setSelected(newSelected);
    toast.warn(`${p.name} removed from your squad!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }


  return (
    <>
      <div className="">
        <div className="w-11/12 mx-auto">
          {/* navbar */}
          <Navbar balance={balance}></Navbar>
          {/* banner */}
          <Banner handleAddBalance={handleAddBalance}></Banner>
          <Available selected={selected} handleIsActiveState={handleIsActiveState} isActive={isActive}></Available>
          {/* selected players */}
          <Selected handleReduceSelected={handleReduceSelected} isActive={isActive} selected={selected} handleIsActiveState={handleIsActiveState}></Selected>
          {/* player cards */}
          <Players handleReduceBalance={handleReduceBalance} isActive={isActive}></Players>
        </div>
        <div className={`relative mt-80`}>
          {/* newsletter */}
          <Newsletter isActive={isActive}></Newsletter>
          {/* footer */}
          <Footer></Footer>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
