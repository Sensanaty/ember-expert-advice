import { helper } from '@ember/component/helper';

export function truncateDescription(string) {
  const splitString = string.join();
  if (splitString.length < 100) {
    return splitString;
  } else {
    return splitString.substring(0, 100) + "...";
  }
}

export default helper(truncateDescription);
