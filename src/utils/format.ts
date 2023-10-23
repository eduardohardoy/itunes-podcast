import { intervalToDuration } from "date-fns";

export const formatIntervalToDuration = (milliseconds: string) => {
  if (!milliseconds) return "00:00";

  const { hours, minutes, seconds } = intervalToDuration({
    start: 0,
    end: parseInt(milliseconds),
  });

  const getTime = (number: number) => {
    if (number) {
      return number < 10 ? `0${number}` : number;
    }

    return "00";
  };

  return `${getTime(hours!)}:${getTime(minutes!)}:${getTime(seconds!)}`;
};
