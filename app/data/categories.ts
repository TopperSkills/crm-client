import type { Category } from "../types/category";

export const categories: Category[] = [
  {
    id: "land",
    title: "जमीन व ७/१२ वाद",
    subtitle: "Property & Land Matters",
    description: "शेतजमीन, फेरफार नोंद, हद्दवाद आणि मोजणी संबंधित मार्गदर्शन.",
    icon: "🏡",
    tags: ["शेतजमीन", "फेरफार नोंद", "हद्दवाद"],
  },
  {
    id: "inheritance",
    title: "वारसा हक्क व मृत्यूपत्र",
    subtitle: "Inheritance & Succession",
    description: "वारस नोंद, हक्कसोड पत्र आणि मृत्यूपत्र संबंधित माहिती.",
    icon: "👨‍👩‍👧",
    tags: ["वारस नोंद", "हक्कसोड पत्र", "मृत्यूपत्र"],
  },
  {
    id: "consumer",
    title: "ग्राहक हक्क व फसवणूक",
    subtitle: "Consumer Rights & Claims",
    description: "बोगस बियाणे, खत भेसळ, हमीभाव वाद याबद्दल मदत.",
    icon: "🛡️",
    tags: ["बियाणे", "खत भेसळ", "हमीभाव"],
  },
  {
    id: "bank-fraud",
    title: "डिजिटल व बँक फसवणूक",
    subtitle: "Digital & Banking Fraud",
    description: "OTP फ्रॉड, बनावट कॉल, ऑनलाइन फसवणूक आणि बँकिंग समस्या.",
    icon: "🏦",
    tags: ["OTP फ्रॉड", "खोटे कॉल", "ऑनलाइन फ्रॉड"],
    urgent: true,
  },
  {
    id: "agreement",
    title: "करार व हमीपत्र",
    subtitle: "Agreements & Stamp Bonds",
    description: "भाडेकरार, खरेदीखत, संमतीपत्र आणि इतर करारांसाठी मार्गदर्शन.",
    icon: "📑",
    tags: ["भाडेकरार", "खरेदीखत", "संमतीपत्र"],
  },
  {
    id: "scheme",
    title: "शासकीय योजना व अनुदान",
    subtitle: "Government Schemes & Subsidies",
    description: "PM-किसान, घरकुल योजना आणि विविध सरकारी अनुदानांची माहिती.",
    icon: "🏛️",
    tags: ["PM-किसान", "घरकुल", "अनुदान"],
  },
];