import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import StudentCard from "./components/StudentCard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-1 overflow-auto flex-col items-center align-middle justify-center  h-full w-full">
        <StudentCard />
      </div>
    </div>
  );
};

export default App;


// import React, { useEffect, useState } from 'react';
// import algosdk from 'algosdk';
// import { Buffer } from 'buffer';
// import { PeraWalletConnect } from '@perawallet/connect';
// import StudentCard from './components/StudentCard'; // Import the StudentCard component
// import { getStudentData } from './api/actions'; // Ensure this path is correct

// import './App.css';

// function App() {
//   const [currentAccount, setCurrentAccount] = useState<string | null>(null);
//   const [voteState1, setVoteState1] = useState("Vote");
//   const [voteState2, setVoteState2] = useState("Vote");
//   const [Count1, setCount1] = useState(0);
//   const [Count2, setCount2] = useState(0);
//   const [walletBalance, setWalletBalance] = useState<number>(0);
//   const [studentData, setStudentData] = useState(null);
//   const [studentName, setStudentName] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const peraWallet = new PeraWalletConnect({
//     chainId: 416002, // Default chainId is "4160"
//     shouldShowSignTxnToast: true,
//   });

//   const appAddress: number = 650759626; // This should be your app ID on Algorand
//   const baseServer = "https://testnet-api.algonode.cloud";
//   const algodClient = new algosdk.Algodv2("", baseServer, "");

//   const fetchStudentData = () => {
//     setLoading(true);
//     getStudentData(studentName)
//       .then(data => {
//         setStudentData(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//         setError('Failed to fetch data');
//       });
//   };

//   useEffect(() => {
//     // Setup to check if the wallet is connected on mount
//     peraWallet.reconnectSession().then(accounts => {
//       if (peraWallet.isConnected && accounts.length) {
//         setCurrentAccount(accounts[0]);
//       }
//     }).catch(err => {
//       console.error(err);
//     });
//   }, []);

//   // Render function
//   return (
//     <div className="appContainer">
//       <div className="dataContainer">
//         <header>
//           <h1>Welcome to Algorand Song Voting</h1>
//           <input
//             type="text"
//             value={studentName}
//             onChange={e => setStudentName(e.target.value)}
//             placeholder="Enter student ID"
//           />
//           <button onClick={fetchStudentData} disabled={loading}>
//             {loading ? 'Loading...' : 'Fetch Student'}
//           </button>
//           {error && <p className="error">{error}</p>}
//         </header>
//         {studentData && <StudentCard data={studentData} />}
//         {/* Your existing voting UI comes here, adjusting as needed for your app's requirements */}
//       </div>
//     </div>
//   );
// }

// export default App;
