const assign = [
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #4577",
    description: "Receive",
    packs: "3 items",

  },
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #8996",
    description: "Receive",
    packs: "7 items",

  },
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #3358",
    description: "Ship/ Return",
    packs: "10 items",

  },
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #1023",
    description: "Ship/ Return",
    packs: "33 items",

  },

];
const resume = [
  {
    icon: require("../assets/icons/picking.png"),
    title: "Order #1248",
    description: "picking",
    packs: "1/11",
    loading: 33
  },

];
const AssignReceiving = [
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #4577",
    description: "Paul Anderson",
    packs: "3 items",
    user: require("../assets/icons/userassigned.png"),
  },
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #8996",
    description: "Paul Anderson",
    packs: "7 items",
    user: require("../assets/icons/userassigned.png"),
  },
];
const AvailableReceiving = [
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #3255",
    description: "Unassigned",
    packs: "8 items",
    user: require("../assets/icons/userquestion.png"),
  },
  {
    icon: require("../assets/icons/receiving.png"),
    title: "Order #3845",
    description: "Unassigned",
    packs: "21 items",
    user: require("../assets/icons/userquestion.png"),
  },

];

const availableAway = [
  {
    icon: require("../assets/icons/away4.png"),
    title: "Order #4577",
    description: "Unassigned",
    packs: "3 items",
    user: require("../assets/icons/userquestion.png"),
  },
  {
    icon: require("../assets/icons/away4.png"),
    title: "Order #4392",
    description: "Unassigned",
    packs: "11 items",
    user: require("../assets/icons/userquestion.png"),
  },
  {
    icon: require("../assets/icons/away4.png"),
    title: "Order #3994",
    description: "Unassigned",
    packs: "8 items",
    user: require("../assets/icons/userquestion.png"),
  },

];

const availablePicking = [
  {
    icon: require("../assets/icons/pickingleft.png"),
    title: "Order #1248",
    description: "Paul Anderson",
    packs: "1 / 11",
    user: require("../assets/icons/userquestion.png"),
    loading: 33

  },


];

export default {assign , resume, AvailableReceiving, AssignReceiving, availableAway, availablePicking };
