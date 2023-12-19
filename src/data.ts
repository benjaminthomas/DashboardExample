import amports from "/news/amports.jpg";
import jaxport from "/news/jaxport.jpg";
import terminal from "/news/terminal.png";

import storage from "/features/storage.svg";
import storageDark from "/features/storage-dark.svg";
import tracking from "/features/tracking.svg";
import trackingDark from "/features/tracking-dark.svg";
import preDelivery from "/features/pre-delivery.svg";
import preDeliveryDark from "/features/pre-delivery-dark.svg";
import installation from "/features/vehicle-pickup.svg";
import installationDark from "/features/vehicle-pickup-dark.svg";
import cargoHandling from "/features/cargo-handling.svg";
import cargoHandlingDark from "/features/cargo-handling-dark.svg";

import shaping from "/contentblocks/shaping.jpg";
import solutions from "/contentblocks/solutions.jpg";

import { BsArrowDown, BsCheck, BsExclamation } from "react-icons/bs";

export const links = [
  {
    id: 1,
    name: "Home",
    hash: "#home",
  },
  {
    id: 2,
    name: "Services",
    hash: "#services",
  },
  {
    id: 3,
    name: "Excellence",
    hash: "#excellence",
  },
  {
    id: 4,
    name: "News",
    hash: "#news",
  },
] as const;

export const articles = [
  {
    id: 1,
    title: "AMPORTS' Digital & EV Investments",
    description:
      "AMPORTS revolutionizes operations with digital tech and EV infrastructure.",
    image: amports,
  },
  {
    id: 2,
    title: "State of the Port - JAXPORT",
    description:
      "AMPORTS joyfully marks 50 years of collaboration with JAXPORT.",
    image: jaxport,
  },
  {
    id: 3,
    title: "Antioch Terminal Triumph",
    description:
      "Siem Socrates arrives at Antioch, expanding AMPORTS' automotive network and enhancing services.",
    image: terminal,
  },
] as const;

export const features = [
  {
    id: 1,
    title: "Storage & Transportation",
    description:
      "AMPORTS offers short and long-term car storage and efficient transportation management for secure vehicle movement.",
    image: storage,
    imageDark: storageDark,
  },
  {
    id: 2,
    title: "Tracking & Inspections",
    description:
      "We use advanced tracking for vehicle location and perform thorough condition inspections to maintain quality control.",
    image: tracking,
    imageDark: trackingDark,
  },
  {
    id: 3,
    title: "Pre-Delivery Solutions",
    description:
      "Siem Socrates arrives at Antioch, expanding AMPORTS' automotive network and enhancing services.",
    image: preDelivery,
    imageDark: preDeliveryDark,
  },
  {
    id: 4,
    title: "Vehicle Upkeep & Installations",
    description:
      "We provide preventive maintenance programs and install a range of accessories to tailor cars to customer preferences.",
    image: installation,
    imageDark: installationDark,
  },
  {
    id: 5,
    title: "High & Heavy Cargo Handling",
    description:
      "Our EPC solutions specialize in safe and efficient handling and transport of oversized and heavy machinery.",
    image: cargoHandling,
    imageDark: cargoHandlingDark,
  },
] as const;

export const excellences = [
  {
    id: 1,
    title: "Building Together",
    subtitle: "Shaping a Sustainable and Socially Responsible Future Together",
    description:
      "At AMPORTS, we prioritize ESG policies, advancing environmental responsibility, promoting social accountability, and upholding strong governance. Together, we're building a better future. Join us in creating positive change today.",
    image: shaping,
    url: "/",
  },
  {
    id: 2,
    title: "EV Solutions Team",
    subtitle: "Pioneering Electric Solutions for a Seamless Driving Experience",
    description:
      "AMPORTS, your EV specialists, provide seamless driving solutions. From certified drivers to white glove delivery and accessories, we exceed expectations. With focus on software updates, customizations, and charging infrastructure, we're committed to sustainability. Explore our dedication at terminals in Benicia, Freeport, Jacksonville, Baltimore Dundalk, and Baltimore Atlantic.",
    image: solutions,
    url: "/",
  },
] as const;

export const responses = [
  {
    id: 1,
    title: "Total",
    status: {
      label: "Total incoming",
      count: "100",
      color: "bg-primary",
      textColor: "text-primary",
      icon: BsArrowDown,
    },
  },
  {
    id: 2,
    title: "Success",
    status: {
      label: "Incoming success",
      count: "10",
      color: "bg-success",
      textColor: "text-success",
      icon: BsCheck,
    },
  },
  {
    id: 3,
    title: "Failed",
    status: {
      label: {
        title: "ValidationFail",
        count: "5",
      },
      label2: {
        title: "DB2Fail",
        count: "5",
      },
      count: "10",
      color: "bg-danger",
      textColor: "text-danger",
      icon: BsExclamation,
      resend: true,
    },
  },
  {
    id: 4,
    title: "Payload size",
    status: {
      label: "Incoming Payload size",
      count: "6B",
      color: "bg-warning",
      textColor: "text-warning",
      icon: BsArrowDown,
    },
  },
] as const;
