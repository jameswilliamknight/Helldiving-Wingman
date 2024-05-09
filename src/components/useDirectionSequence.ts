import { useState, useEffect } from "react";
import { Stratagem, stratagemDetails } from "./Stratagems";

const flashInterval = 500; // Interval between flashes in milliseconds
const pauseInterval = 1000; // Interval of pause between sequences

function useDirectionSequence(stratagem: Stratagem) {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const details = stratagemDetails[stratagem];

  useEffect(() => {
    let index = 0;
    let interval: number;

    const startSequence = () => {
      interval = window.setInterval(() => {
        setActiveKey(details.sequence[index]);
        index = (index + 1) % details.sequence.length;
        setTimeout(() => setActiveKey(null), flashInterval / 2);
      }, flashInterval);

      setTimeout(() => {
        clearInterval(interval);
        setTimeout(startSequence, pauseInterval);
      }, flashInterval * details.sequence.length);
    };

    startSequence();

    return () => {
      clearInterval(interval);
    };
  }, [details]);

  return { activeKey, image: details.image };
}

export default useDirectionSequence;
