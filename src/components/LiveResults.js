// src/components/LiveResults.js
import { useEffect, useState } from "react";

export default function LiveResults({ candidates }) {
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    const sortedCandidates = [...candidates].sort(
      (a, b) => Number(b.voteCount) - Number(a.voteCount)
    );
    setSorted(sortedCandidates);
  }, [candidates]);

  return (
    <div className="mt-8 p-4 bg-white border rounded">
      <h2 className="text-xl font-bold mb-4">Live Results</h2>
      {sorted.map((cand, idx) => (
        <div key={idx} className="flex justify-between py-1">
          <span>{cand.name} ({cand.post})</span>
          <span className="font-bold">{Number(cand.voteCount)} votes</span>
        </div>
      ))}
    </div>
  );
}
