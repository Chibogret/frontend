import {
  BellRing,
  Building2,
  CircleHelp,
  ClipboardList,
  FileText,
  Landmark,
  Megaphone,
  Palmtree,
  PhoneCall,
  ShieldAlert,
  Ticket,
  TreePine,
} from "lucide-react";

export const navItems = [
  { icon: Landmark, label: "Home", href: "/" },
  { icon: FileText, label: "Services", href: "/services" },
  { icon: Megaphone, label: "Alerts", href: "/announcements" },
  { icon: ClipboardList, label: "Requirements", href: "/requirements" },
];

export const quickActions = [
  {
    icon: ClipboardList,
    title: "Permit requirements",
    description: "See what to bring before you visit the municipal office.",
    href: "/requirements",
  },
  {
    icon: Megaphone,
    title: "Event announcements",
    description: "Check banners, schedules, and public notices.",
    href: "/announcements",
  },
  {
    icon: FileText,
    title: "Municipal services",
    description: "Find offices, services, and common requests.",
    href: "/services",
  },
  {
    icon: BellRing,
    title: "Public advisories",
    description: "Read bulletin-style updates without account signups.",
    href: "/announcements",
  },
] as const;

export const townFacts = [
  { label: "Population", value: "42,671", detail: "2020 census", icon: Building2 },
  { label: "Barangays", value: "13", detail: "local service areas", icon: Landmark },
  { label: "Setting", value: "Coastal", detail: "Sibuyan Sea", icon: Palmtree },
] as const;

export const featuredNotices = [
  {
    title: "Business permit prep",
    summary: "Prepare your basic documents before visiting the Mayor's Office or Treasurer's Office.",
    tag: "Permits",
    date: "Mon - Fri, 8AM - 5PM",
    tone: "default",
  },
  {
    title: "Tourism before travel",
    summary: "Review Plaza de Bansud, the Bansud Museum, Tiguisan Beach, and local events before making the trip.",
    tag: "Tourism",
    date: "Daily, 8AM - 6PM",
    tone: "secondary",
  },
  {
    title: "Office directory",
    summary: "Browse service windows for health, civil registry, tourism, agriculture, and DRRM.",
    tag: "Directory",
    date: "Updated schedules",
    tone: "outline",
  },
] as const;


export const serviceShortcuts = [
  {
    title: "Get a permit or clearance",
    description: "Business permits, Mayor's clearance, and front-office requests.",
    href: "#mayors-office",
    icon: Ticket,
  },
  {
    title: "Request a civil record",
    description: "Birth, marriage, death, and registry document guidance.",
    href: "#civil-registrar",
    icon: FileText,
  },
  {
    title: "Ask where to start",
    description: "Use the directory to find the right office before queueing.",
    href: "#office-directory",
    icon: CircleHelp,
  },
] as const;

export const serviceGroups = [
  {
    title: "Mayor's Office",
    icon: Ticket,
    summary: "Business permits, clearances, and front-office requests.",
    items: ["Mayor's clearance", "Business permit assistance", "General citizen concerns"],
    schedule: "Mon - Fri, 8:00 AM - 5:00 PM",
    note: "Start here for general permits, clearances, and routing to the correct desk.",
    requirements: "Valid ID, request purpose, and supporting documents",
  },
  {
    title: "Municipal Health Office",
    icon: ShieldAlert,
    summary: "Medical certificates, consultations, and health-related documents.",
    items: ["Medical certificate", "Checkups", "Pre-natal and family planning support"],
    schedule: "Mon - Fri, 8:00 AM - 5:00 PM",
    note: "Arrive early for consultation windows and bring any previous health records.",
    requirements: "Valid ID and consultation details",
  },
  {
    title: "Civil Registrar",
    icon: FileText,
    summary: "Birth, marriage, and death certificates plus registry requests.",
    items: ["Birth certificate", "Marriage certificate", "Death certificate"],
    schedule: "Mon - Fri, 8:00 AM - 5:00 PM",
    note: "Bring exact names, dates, and authorization when requesting for someone else.",
    requirements: "Requestor details and authorization if needed",
  },
  {
    title: "Tourism and Culture",
    icon: Palmtree,
    summary: "Visitor guidance, destination information, and local highlights before going to town.",
    items: ["Bansud Museum", "Tiguisan Beach", "Plaza de Bansud", "Basudani Festival"],
    schedule: "Mon - Sun, 8:00 AM - 6:00 PM",
    note: "Use this office for destination guidance, cultural events, and visitor questions.",
    requirements: "Travel date, destination, and group details when available",
  },
  {
    title: "Agriculture Office",
    icon: TreePine,
    summary: "Support for farmers, livestock concerns, and field coordination.",
    items: ["Farmer assistance", "Livelihood support", "Field services"],
    schedule: "Mon - Fri, 8:00 AM - 5:00 PM",
    note: "Prepare barangay, farm, or livelihood details so staff can route the concern.",
    requirements: "Valid ID and relevant farm or livestock information",
  },
  {
    title: "DRRM and Public Safety",
    icon: ShieldAlert,
    summary: "Emergency response, preparedness, and assistance during disruptions.",
    items: ["Emergency hotline", "Risk advisories", "Response coordination"],
    schedule: "24/7 Operations",
    note: "For immediate incidents, contact emergency response channels instead of waiting for office hours.",
    requirements: "Location, contact number, and incident details",
  },
] as const;

export const permitRequirements = [
  {
    title: "Business permit",
    items: [
      "Valid government-issued ID",
      "Filled-out application form",
      "Barangay clearance, if required by the office",
      "Previous permit details, if renewing",
    ],
  },
  {
    title: "Mayor's clearance",
    items: [
      "Valid ID",
      "Purpose of the request",
      "Supporting documents if the clearance is for employment or travel",
    ],
  },
  {
    title: "Civil registry copy",
    items: [
      "Requestor's name and details",
      "Authorization letter if requesting for another person",
      "Basic registry reference such as date or record number, when available",
    ],
  },
  {
    title: "Medical certificate",
    items: [
      "Valid ID",
      "Consultation details, if available",
      "Office-specific forms if issued in advance",
    ],
  },
] as const;


export const citizenSections = [
  {
    title: "Permits and clearances",
    description: "Business permits, Mayor's clearance, registry copies, and front-office guidance.",
    href: "/requirements",
    icon: ClipboardList,
  },
  {
    title: "Health and safety",
    description: "Medical certificates, consultations, DRRM updates, and emergency reminders.",
    href: "/services",
    icon: ShieldAlert,
  },
  {
    title: "Tourism and events",
    description: "Visitor stops, town culture, festival banners, and community schedules.",
    href: "/announcements",
    icon: Palmtree,
  },
] as const;

export const contactCards = [
  { label: "Office line", value: "Municipal Hall", detail: "Open Mon-Fri, 8AM - 5PM", icon: PhoneCall },
  { label: "Front desk", value: "Information only", detail: "No online filing in this mock", icon: BellRing },
] as const;

export const bansudPhotos = [
  {
    title: "Plaza de Bansud",
    description: "Town plaza and municipal grounds in Poblacion.",
    src: "/images/bansud-plaza-wide.jpg",
    source: "Wikimedia Commons / Hariboneagle927 / CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Plaza_de_Bansud.jpg",
  },
  {
    title: "Municipal hall grounds",
    description: "Rizal monument and civic open space near municipal services.",
    src: "/images/bansud-plaza-municipal-hall.jpg",
    source: "Wikimedia Commons / Alloizajean / CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:PLAZA_DE_BANSUD_-_ORIENTAL_MINDORO.jpg",
  },
] as const;
