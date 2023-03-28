import React, { useState, useEffect } from "react";
import SideNav from "../components/SideNav";
import Chat from "../components/MessageSocket";
import io from "socket.io-client";
import house from '../assets/house5.jpeg'
import Logo from '../assets/logoGold.png'



const socket = io.connect("http://localhost:3001");


const MessagesPage = () => {
const [username, setUsername] = useState("");
const [room, setRoom] = useState("");
const [showChat, setShowChat] = useState(false);
const [socket] =useState(()=>io(':8000'))

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div style={{ display: "flex", marginRight: "50px", height: "100vh" }}>
      <SideNav style={{ position: "fixed" }} />
      <div
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          borderRadius: "0% 0% 10% 10%",
          boxShadow: "15px 10px 16px rgba(0, 0, 0, 0.2)",
          flex: "1",

        }}
      >
        <h1 className="mb-3" style={{ textAlign: "center", marginTop: "50px" }}>
          <span style={{ color: "gold" }}>R E A L</span> Talk?
        </h1>
        <h6
          className="card-subtitle mb-2 text-muted"
          style={{ textAlign: "center" }}
          >
          Let Us know How We Can Help You!
        </h6>





          <main
        className='shadow-lg p-5 text-center bg-image'
        style={{ backgroundImage:`url(${house})`,backgroundSize:'cover' ,borderRadius: '10% 1%', backgroundPosition:'center',display:'flex', justifyContent:'center', maxHeight: '80vh' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding:'70px', width:'50vh', borderRadius: '25% 1%'}}>
          <div className='align-items-center h-100'>
            <div className='text-red'>





            <div style={{display:'flex', justifyContent:'center'}}>
          {!showChat ? (
            <div className="joinChatContainer">
              <input
                type="text"
                placeholder="John..."
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              />
            </div>
          ) : (
            <Chat socket={socket} username={username} room={room}/>
          )}
        </div>









              <h1 className='mb-3 text-white'><span style={{color:'gold'}}>R E A L</span> Talk?</h1>
              <h4 className='mb-3 text-white' style={{padding:'0px'}}>We Sell Properties <span style={{color:'gold'}}>&</span> Happiness<span style={{color:'gold',fontSize:'110%'}}>!</span></h4>
              <button onClick={joinRoom} className='btn btn-outline-success btn-lg' href='#!' role='button'>
                Start Chat Now
              </button>
            </div>
          </div>
        </div>
      </main>


      <div
        style={{
          marginTop: "100px",
          fontSize: "10px",
          textAlign: "center",
          fontWeight: 200,
        }}
      >
        <p>
          This is a property of Gold Standard Estate a Real Estate Service, Real Talk is not Responsible
          if you make a bad purchase or loose all your money due to your bad
          choices! Any lawsuits will be settled outside of court with our fists,
          any action will result in your permanent lose. Think twice before
          acting. This project was brought to you by Renan, Boe, yours truly Javi. Aka.. Boenan Rodriguez{" "}
        </p>
      </div>




      </div>
    </div>
  );
};

export default MessagesPage;
