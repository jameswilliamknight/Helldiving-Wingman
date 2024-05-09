import useDirectionSequence from "./useDirectionSequence";
import { Stratagem } from "./Stratagems";
import DirectionKey from "./DirectionKey";
import {
  ArrowUpIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/solid";

export interface DirectionPadProps {
  stratagem: Stratagem;
}

const DirectionPad = ({ stratagem }: DirectionPadProps) => {
  const { activeKey, image } = useDirectionSequence(stratagem);

  return (
    <div className="flex space-x-20 justify-center items-center border-2 shadow-md shadow-yellow-700 border-yellow-700 p-5 rounded-xl backdrop-blur-sm	">
      <div className="flex flex-col space-y-2 items-center w-40">
        <img src={image} alt="Stratagem" className="w-32 h-32" />
        <span className="text-center font-mono font-bold text-wrap">
          {stratagem}
        </span>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          <div className="col-start-2">
            <DirectionKey
              icon={<ArrowUpIcon className="w-10 h-10" />}
              isActive={activeKey === "up"}
              colorActive="bg-amber-500"
              colorInactive="bg-gray-800"
            />
          </div>
          <div className="col-start-1">
            <DirectionKey
              icon={<ArrowLeftIcon className="w-10 h-10" />}
              isActive={activeKey === "left"}
              colorActive="bg-amber-500"
              colorInactive="bg-gray-800"
            />
          </div>
          <div className="col-start-2">
            <DirectionKey
              icon={<ArrowDownIcon className="w-10 h-10" />}
              isActive={activeKey === "down"}
              colorActive="bg-amber-500"
              colorInactive="bg-gray-800"
            />
          </div>
          <div className="col-start-3">
            <DirectionKey
              icon={<ArrowRightIcon className="w-10 h-10" />}
              isActive={activeKey === "right"}
              colorActive="bg-amber-500"
              colorInactive="bg-gray-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectionPad;
