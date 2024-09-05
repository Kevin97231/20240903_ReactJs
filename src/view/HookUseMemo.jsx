import { WithoutUseMemo } from "../components/WithoutUseMemo";
import { WithUseMemo } from "../components/WithUseMemo";

export const HookUseMemo = () => {
  return (
    <div className="pt-20">
      <h1>Le hook HookUseMemo</h1>
      <WithoutUseMemo />
      <WithUseMemo />
    </div>
  );
};
