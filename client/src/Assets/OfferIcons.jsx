export const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="checkIcon"
      fill="none"
    >
      <path
        d="M3 8.5L6.2 11.5L13 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ClockIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="clockIcon">
      <circle cx="12" cy="12" r="9" fill="none" strokeWidth="1.6" />
      <path
        d="M12 7v5l3.2 2"
        fill="none"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShieldCheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="shieldCheckIcon"
      fill="none"
    >
      <path
        d="M12 2.5l7 3v5.2c0 5-3 8.6-7 10.3-4-1.7-7-5.3-7-10.3V5.5l7-3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 12l2 2 4-4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const UsersIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      id="usersIcon"
      fill="none"
    >
      <path
        d="M15.5 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8.5 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M3 19c0-2.8 2.5-5 5.5-5s5.5 2.2 5.5 5M10 19c0-2.3 1.9-4.2 4.5-4.2S19 16.7 19 19"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const makeGearTeeth = (cx, cy, r, toothLen) =>
  [0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return {
      x1: +(cx + r * cos).toFixed(2),
      y1: +(cy + r * sin).toFixed(2),
      x2: +(cx + (r + toothLen) * cos).toFixed(2),
      y2: +(cy + (r + toothLen) * sin).toFixed(2),
    };
  });

const gearATeeth = makeGearTeeth(34, 38, 9, 8);
const gearBTeeth = makeGearTeeth(58, 46, 6, 6);

const RepairGears = () => (
  <>
    <circle cx="34" cy="38" r="9" />
    <circle cx="34" cy="38" r="3.5" />
    {gearATeeth.map((line) => (
      <line key={`a-${line.x1}-${line.y1}`} {...line} />
    ))}
    <circle cx="58" cy="46" r="6" />
    <circle cx="58" cy="46" r="2.3" />
    {gearBTeeth.map((line) => (
      <line key={`b-${line.x1}-${line.y1}`} {...line} />
    ))}
  </>
);

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  fill: "none",
  stroke: "var(--accent-primary)",
  strokeWidth: "6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const LaptopIcon = () => {
  return (
    <svg {...iconProps} id="laptopIcon">
      <rect x="14" y="14" width="72" height="50" rx="10" />
      <path d="M12,68 L88,68 L82,78 L18,78 Z" />
      <RepairGears />
    </svg>
  );
};

export const MonitorIcon = () => {
  return (
    <svg {...iconProps} id="monitorIcon">
      <rect x="14" y="14" width="72" height="50" rx="10" />
      <path d="M50,64 V74" />
      <path d="M35,78 H65" />
      <RepairGears />
    </svg>
  );
};

export const DataRecoveryIcon = () => {
  return (
    <svg {...iconProps} id="dataRecoveryIcon">
      <path d="M24,14 H70 L80,24 V78 A6,6 0 0 1 74,84 H26 A6,6 0 0 1 20,78 V20 A6,6 0 0 1 24,14 Z" />
      <rect x="34" y="14" width="22" height="12" rx="2" />
    </svg>
  );
};

export const ArrowRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="arrowRightIcon"
      fill="none"
    >
      <path
        d="M2 8h11M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
