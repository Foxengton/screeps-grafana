import ScreepsStatsd from "./src/ScreepsStatsd.js";

const statsd = new ScreepsStatsd(
    process.env.SCREEPS_HOST,
    process.env.SCREEPS_EMAIL,
    process.env.SCREEPS_PASSWORD,
    process.env.SCREEPS_SHARD,
    process.env.GRAPHITE_PORT_8125_UDP_ADDR || "statsd"
);

statsd.run();

process.on("unhandledRejection", (err) => {
    console.error("Unhandled rejection:", err);
});