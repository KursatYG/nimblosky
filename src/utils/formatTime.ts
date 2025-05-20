export function formatUnixTime(unixTime: number): string {
  const date = new Date(unixTime * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const meridiem = hours < 12 ? "ÖÖ" : "ÖS";

  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes} ${meridiem}`;
}
