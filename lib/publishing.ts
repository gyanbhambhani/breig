export type Project = {
  title: string
  status: "Active" | "Completed" | "Classified"
  sector: string
  location?: string
  summary: string
  contact?: string
}

export type MarketNote = {
  date: string
  topic: string
  title: string
  summary: string
  paragraphs?: string[]
  author?: string
  linkedin?: string
}

// Add a project by appending an object to this list.
export const projects: Project[] = [
  {
    title: "East Bay Multifamily",
    status: "Classified",
    sector: "Multifamily",
    location: "Walnut Creek, California",
    summary: "Contact us to read the brief.",
    contact: "mailto:gyanb@berkeley.edu",
  },
]

// Add a market note when it is ready to publish, including the LinkedIn URL.
export const marketNotes: MarketNote[] = [
  {
    date: "Summer 2026",
    topic: "Commercial",
    title: "Commercial Real Estate, Summer 2026",
    author: "Prepared by a BREIG analyst",
    summary:
      "The summer did not deliver a broad commercial recovery. Capital was open for leased, well-located assets, and closed for everything else.",
    paragraphs: [
      "Office demand turned positive on an annual basis in the second quarter, the first time in nearly four years, but it stayed in Class A. Colliers reported close to 17 million square feet of net absorption in trophy and well-located buildings in the quarter, an eighth straight quarter of gains for that slice of the market. The rest did not follow. Integra’s mid-year read put CBD Class A vacancy at 22.1 percent, and office CMBS delinquency was about 11.6 percent. Core office cap rates sat near 7.4 percent.",
      "Industrial spent the summer finishing a rebalance rather than starting a new upcycle. Vacancy stabilized around 7.3 percent as the construction pipeline thinned and logistics demand held. Values reached their strongest level in nearly three years. Rents are still elevated after the prior five-year run, but growth cooled to the softest pace since 2012. Core industrial cap rates were about 5.2 percent.",
      "Retail was the steadiest sector. Vacancy held near 4.3 percent, low against its own history, and Integra found more than 90 percent of retail markets in recovery or expansion. Grocery-anchored and necessity space took the demand. Strip-center cap rates were about 6.4 percent. Limited new supply is what kept rents intact while growth slowed.",
      "Cap rates drifted up with Treasury yields, and development outside data centers stayed scarce. The screen coming out of the summer is simple: pay for a tenant and a location that still works. Obsolete office remains a credit problem, not an occupancy story.",
    ],
  },
]
