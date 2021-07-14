import { useEffect, useState } from "react";

const useVote = (actualVote = 0) => {
  const [votes, setVotes] = useState(actualVote);

  useEffect(() => {
    setVotes(actualVote);
  }, [actualVote]);

  const incrementVote = () => {
    setVotes((currentVote) => currentVote + 1);
  };

  return { votes, setVotes, incrementVote };
};

export default useVote;
