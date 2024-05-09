import { useAtom } from "jotai";
import { stratagemStateAtom } from "./stratagemState";
import { Stratagem, stratagemDetails } from "./Stratagems";

export interface StratagemSelectorCategoryProps{
    category: string;
}

const StratagemSelectorCategory = ({category}: StratagemSelectorCategoryProps) => {
  const [stratagems, setStratagems] = useAtom(stratagemStateAtom);

  const toggleStratagem = (key: Stratagem) => {
    setStratagems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (

      <div className="flex flex-wrap gap-6 p-4 justify-center">
        {Object.values(Stratagem)
          .filter((key) => stratagemDetails[key].category === category)
          .map((key) => (
            <button
              key={key}
              onClick={() => toggleStratagem(key)}
              className={`p-2 rounded-md border-2 focus:outline-none ${
                stratagems[key]
                  ? "border-yellow-500 focus:border-yellow-500"
                  : "border-gray-200"
              } shadow-md shadow-yellow-800`}
            >
              <img
                src={stratagemDetails[key].image}
                alt={key}
                className="w-16 h-16"
              />
            </button>
          ))}
      </div>
  );
};

export default StratagemSelectorCategory;
