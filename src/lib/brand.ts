// Brand config — hydrated at scaffold time by build_site.py from
// plan-input.json and the client record. All {{TOKENS}} are replaced
// by the scaffold step; this file should not be hand-edited after that.

export const brand = {
  slug: "restorationxpress",
  displayName: "RestorationXpress ",
  shortName: "RestorationXpress",
  legalName: "RestorationXpress ",
  domain: "restorationxpress.com",
  canonicalUrl: "https://restorationxpress.com",
  phone: "(954) 932-5420",
  phoneRaw: "+19549325420",
  // Sitewide call-tracking display number (DNI — see BaseLayout).
  // Schema/NAP keep the canonical number above.
  trackingPhone: "(954) 932-5420",
  trackingPhoneRaw: "+19549325420",
  email: "issac@restorationxpress.com",
  hours: "24/7",
  foundedYear: "2011",
  primaryCity: "Davie",
  primaryState: "FL",
  streetAddress: "4700 SW 51 ST SUIT 205 DAVIE FL33314 ",
  postalCode: "33314",
  lat: "26.0628665",
  lng: "-80.2331038",
  placeId: "",
  googleCid: "",
  imagesBase: "https://images.restorationxpress.com",
  googleMapsApiKey: "",
  // Analytics — set post-scaffold (scripts/analytics_set.py / create_ga4.py); no-op if empty
  ga4MeasurementId: "G-YMWBHG8Y4F",
  clarityProjectId: "",
  logoUrl: "/images/logo.png",
  licenseNumbers: ["1057"] as string[],
  licenseAuthority: "",
  licenseType: "",
  // Operator-confirmed "licensed & insured" attestation from plan-input.json —
  // lets the TrustStrip show the badge before a license number is on file.
  licensedInsuredAttested: true as boolean,
  certifications: [] as string[],
  trustBadges: ["Licensed & Insured", "24/7 Emergency Response", "Serving Broward, Palm Beach & Miami-Dade Since 2011", "Insurance Billing Accepted"] as string[],
  jobPhotos: [] as string[],
  sameAsUrls: ["https://www.facebook.com/restorationxpress/", "https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResults?InquiryType=EntityName&InquiryDirectionType=PreviousRecord&SearchTerm=RESTORATION%20WELL%20LLC&SearchNameOrder=RESTORATIONXPRESSWESTFLORIDA%20L130001451140&ListNameOrder=RESTORATIONWELL%20L180001624880&Detail=FL.DOS.Corporations.Shared.Contracts.FilingRecord", "https://maps.google.com/maps?cid=16857264021556416183", "https://www.homeadvisor.com/rated.RestorationXpressLLC.85203543.html", "https://homeguide.com/fl/davie/water-damage-restoration/restorationxpress-_VgGv-Adz"] as string[],
  // GBP rating fields — synced from the live Google Business Profile by
  // scripts/sync_brand_reviews.py; never hand-edited (real ratings only).
  gbpRatingValue: "4.9",
  gbpReviewCount: "136",
  gbpReviews: [
    { author: "Sharon", rating: 5, text: "Restoration Xpress was incredible!! They were quick to answer my call and arrived promptly to set everything up. Recommended 100%!!!", when: "October 2026" },
    { author: "Alec", rating: 5, text: "Professional and friendly, the most reliable people.", when: "October 2026" },
    { author: "Ivonne", rating: 5, text: "Shady & Chris did a great job with the molding restoration in my apartment. I recommend them", when: "October 2026" },
    { author: "Ania", rating: 5, text: "Chris and Shadi did a great job at our place. Thank you", when: "October 2026" },
    { author: "Patricia", rating: 5, text: "The company provided me with not only excellent service but also personalized attention—going far beyond a simple, one-off interaction! I am grateful for their help and support in resolving the issues caused by the water accident in my home.", when: "September 2026" },
    { author: "Gisela", rating: 5, text: "Great work and excelent customer service!!!", when: "September 2026" },
  ] as { author: string; rating: number; text: string; when: string }[],
  tagline: "24/7 restoration services in Davie, FL.",
  ctaLabel: "24/7 Emergency Line",
} as const;

export const entityId = `${brand.canonicalUrl}/#identity`;
