// -----DataBase-----
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";
import img4 from "./images/img4.png";
import sqlImg from "./Assets/sql1.svg";
import sqlImg2 from "./Assets/sql2.svg";

export const olapData = [
  {
    id: 1,
    cover: img1,
    title: "Real-Time & User-Facing Analytics",
    desc: "Dashboards and data products need to be reactive to up-to-the-minute changes in your business.",
    link: "Read More",
  },
  {
    id: 2,
    cover: img2,
    title: "Automation and Alerting",
    desc: "Save time for your users, and build value by taking action or notifying at only the right moments.",
    link: "Read More",
  },
  {
    id: 3,
    cover: img3,
    title: "Segmentation and Personalization",
    desc: "Value of personalization, recommendations, dynamic pricing increases as latency of data aggregations approaches zero.",
    link: "Read More",
  },
  {
    id: 4,
    cover: img4,
    title: "ML in Production",
    desc: "Online feature stores need continually updated data, operators need to monitor and react to changes in ML effectiveness.",
    link: "Read More",
  },
];

// -----Sql Database----

export const sqlData = [
  {
    id: 1,
    cover: sqlImg,
    title: "Distributed and Cloud Native",
    desc: "Materialize separates storage and compute for a cloud-native architecture — and adds in a serving layer.",
    link: "Read: Materialize Architecture",
  },
  {
    id: 2,
    cover: sqlImg2,
    title: "Results are always up-to-date",
    desc: "Work is done at the moment of data arrival, rather than query time, so that maintained results are available almost instantly.",
    link: "Read: What is a Streaming Database?",
  },
];

// ---- Table Database----
export const TableData = [
  {
    id: 1,
    title: "Incrementally Maintained Views",
    desc: "Write complex SQL transformations as materialized views that efficiently update themselves as inputs change.",
    link: "Learn More",
  },
  {
    id: 2,
    title: "Sliding Windows",
    desc: "Write queries that filter to a window of time anchored to the present, Materialize will update results as time advances.",
    link: "Learn More",
  },
  {
    id: 3,
    title: "SQL Alerting",
    desc: "Write alerts as SQL queries with filters and subscribe to new rows as they appear.",
    link: "Learn More",
  },
];
