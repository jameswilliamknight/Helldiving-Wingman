import { useAtom } from "jotai";
import { stratagemStateAtom } from "./stratagemState";
import DirectionPad from "./DirectionPad";
import { Stratagem } from "./Stratagems";
import StratagemSelectorCategory from "./StratagemSelectorCategory";

const Loadout = () => {
  const [stratagems] = useAtom(stratagemStateAtom);

  return (
    <div className="flex flex-col space-y-10 items-center">
      <div className="flex gap-10 flex-wrap p-10 justify-center">
        {Object.entries(stratagems).map(([key, isActive]) =>
          isActive ? (
            <DirectionPad key={key} stratagem={key as Stratagem} />
          ) : null
        )}
      </div>
      <span className="text-xl font-mono text-yellow-400">{`Stratagems`}</span>
      <div className="flex items-center">
        <div className="grid gap-6">
          <StratagemSelectorCategory category="supply/backpack" />
          <StratagemSelectorCategory category="supply/support-weapons" />
          <StratagemSelectorCategory category="mission" />
          <StratagemSelectorCategory category="defensive" />
          <StratagemSelectorCategory category="offensive/orbital" />
          <StratagemSelectorCategory category="offensive/eagle" />
        </div>
      </div>
    </div>
  );
};

export default Loadout;
