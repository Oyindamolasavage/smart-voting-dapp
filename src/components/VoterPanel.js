// src/components/VoterPanel.js
export default function VoterPanel({ contract, matric, candidates, onVote }) {
  const vote = async (index) => {
    await contract.vote(index, matric);
    alert("Vote submitted successfully!");
    onVote();
  };

  return (
    <div className="mt-8 p-4 border rounded bg-white">
      <h2 className="text-xl font-semibold mb-4">Vote for Your Candidate</h2>
      <div className="space-y-2">
        {candidates.map((cand, idx) => (
          <div key={idx} className="flex justify-between items-center border p-2 rounded">
            <div>
              <p className="font-bold">{cand.name}</p>
              <p className="text-sm text-gray-600">{cand.post}</p>
            </div>
            <button
              onClick={() => vote(idx)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
