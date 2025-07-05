// src/components/AdminPanel.js
import { useState } from "react";

export default function AdminPanel({ contract, candidates, refreshCandidates }) {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [matric, setMatric] = useState("");
  const [wallet, setWallet] = useState("");

  const addCandidate = async () => {
    await contract.addCandidate(name, post);
    refreshCandidates();
  };

  const whitelistVoter = async () => {
    await contract.whitelistVoter(matric, wallet);
  };

  const startElection = async () => {
    await contract.startElection();
  };

  const endElection = async () => {
    await contract.endElection();
  };

  return (
    <div className="mt-8 p-4 border rounded bg-white">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>

      <div className="space-y-4">
        <div>
          <input
            placeholder="Candidate Name"
            className="border p-2 rounded mr-2"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Post"
            className="border p-2 rounded"
            onChange={(e) => setPost(e.target.value)}
          />
          <button
            onClick={addCandidate}
            className="ml-2 bg-green-600 text-white px-3 py-1 rounded"
          >
            Add Candidate
          </button>
        </div>

        <div>
          <input
            placeholder="Matric Number"
            className="border p-2 rounded mr-2"
            onChange={(e) => setMatric(e.target.value)}
          />
          <input
            placeholder="Wallet Address"
            className="border p-2 rounded"
            onChange={(e) => setWallet(e.target.value)}
          />
          <button
            onClick={whitelistVoter}
            className="ml-2 bg-purple-600 text-white px-3 py-1 rounded"
          >
            Whitelist Voter
          </button>
        </div>

        <div className="space-x-4">
          <button
            onClick={startElection}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Start Election
          </button>
          <button
            onClick={endElection}
            className="bg-red-600 text-white px-3 py-1 rounded"
          >
            End Election
          </button>
        </div>
      </div>
    </div>
  );
}