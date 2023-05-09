const breakpoints = [0, 600, 900, 1200, 1536, 1920];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default mq;
