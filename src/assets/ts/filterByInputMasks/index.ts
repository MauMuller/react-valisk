import { getNameFunctions } from "../getNameFunctions";
import { reduceArraysToUniqueArray } from "../reduceArraysToUniqueArray";

import { useMaskCPF } from "../../../hooks/useMaskCPF";
import { useMaskCNPJ } from "../../../hooks/useMaskCNPJ";
import { useMaskCEP } from "../../../hooks/useMaskCEP";
import { useMaskMoney } from "../../../hooks/useMaskMoney";
import { useMaskPhone } from "../../../hooks/useMaskPhone";
import { useMaskPassword } from "../../../hooks/useMaskPassword";

const hooksArray = [
  useMaskCPF,
  useMaskCNPJ,
  useMaskCEP,
  useMaskMoney,
  useMaskPhone,
  useMaskPassword,
];

const filterByInputMasks = (masksNames: string[]) => {
  const functionsOrdened = masksNames.map((nameMask) =>
    hooksArray.filter((hook) => {
      let nameHook = getNameFunctions(hook, [7]);
      return nameHook === nameMask;
    })
  );

  return reduceArraysToUniqueArray(functionsOrdened);
};

export { filterByInputMasks };