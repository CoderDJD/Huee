export default function timeAgo(date: Date | number | string) {
  let d = date;
  if (typeof date === "string") {
    d = +new Date(date);
  }
  if (d instanceof Date) {
    d = +d;
  }
  d = (Date.now() - +d) / 1000;
  const map = [
    { label: "year", time: 31536000 },
    { label: "month", time: 2592000 },
    { label: "week", time: 604800 },
    { label: "day", time: 86400 },
    { label: "hour", time: 3600 },
    { label: "minute", time: 60 },
    { label: "less than minute", time: 0 },
  ];
  const t = map.find(x => x.time < d);
  if (t) {
    const resnum = ~~(+d / t.time);
    return `${resnum} ${t.label}${resnum > 1 ? "s" : ""} ago`;
  } else {
    return "";
  }
}
