export function formatDate(unixTs: number): string {
  return new Date(unixTs * 1000).toLocaleDateString("tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}