import { HiOutlineLightningBolt } from "react-icons/hi";
import { BiSun } from "react-icons/bi";
import { ImWarning } from "react-icons/im";

export const Tabs = [
  {
    icon: HiOutlineLightningBolt,
    header: "examples",
    subHeaders: [
      "explain quantum computind in simple terms",
      "Got any creative ideas for 10 year old's birtday,How do I make an Http request in Javascript",
      "How do I make an HTTP request in javascript",
    ],
  },
  {
    icon: BiSun,
    header: "Capabilities",
    subHeaders: [
      "Remembers what user said earlier in the conversation ",
      "Allows user to provide follw-up corrections ",
      "Trained to decline inappropsriate requests ",
    ],
  },
  {
    icon: ImWarning,
    header: "Limitations",
    subHeaders: [
      "May occasionally generate incorrect information",
      "May occasionally produce harmful instructions or biased content",
      "Limited knowledge of world and events after 2021",
    ],
  },
];
