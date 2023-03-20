import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
const data = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `we offer web development services to small and mid-sized businesses to help them grow their business.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "technical consultation",
    text: `we help businesses tranform their legacy systems into modern infrastructures`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Mobile development",
    text: `We build mobile business solutions`,
  },
]

export default data
