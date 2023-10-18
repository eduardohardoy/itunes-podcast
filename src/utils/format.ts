import { intervalToDuration, format } from "date-fns";

export const formatIntervalToDuration = (milliseconds: string) => {
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

export const formatDate = (date: string) =>
  format(new Date(date), "mm/dd/yyyy");