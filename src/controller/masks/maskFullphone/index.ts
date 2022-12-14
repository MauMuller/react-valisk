import { onlyNumbers } from "../../../assets/ts/onlyNumbers";
import { replaceTemplateCharByValueChar } from "../../../assets/ts/replaceTemplateCharByValueChar";
import { masks } from "../../../data/masks";

const maskFullphone = (
  value: string,
  hashMask: boolean,
  keyDown: string
): string => {
  const template = masks.fullphone;
  const valueWithOnlyNumbers = onlyNumbers(value);
  const formatedValue = replaceTemplateCharByValueChar(
    template,
    valueWithOnlyNumbers,
    hashMask,
    keyDown
  );

  return formatedValue;
};

export { maskFullphone };
