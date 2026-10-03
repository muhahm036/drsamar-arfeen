import { useEffect } from "react";
import { siteConfig } from "../../data/siteConfig";
import { getSiteUrl } from "../../utils/contact";

/** Injects Schema.org JSON-LD describing Dr. Samar Arfeen using only verified information. */
export function StructuredData() {
  useEffect(() => {
    const url = getSiteUrl();
    const { doctor, contact } = siteConfig;

    const physician: Record<string, unknown> = {
      "@type": ["Physician", "Person"],
      "@id": `${url}/#physician`,
      name: doctor.name,
      url,
      jobTitle: [doctor.primaryTitle, doctor.secondaryTitle],
      description: `${doctor.primaryTitle} and ${doctor.secondaryTitle} with experience in coronary intervention, cardiac catheterization, acute cardiac care, medical education and cardiovascular research.`,
      medicalSpecialty: "Cardiovascular",
      hasCredential: ["MBBS", "CHPE", "FCPS (Cardiology)", "FSCAI"].map((name) => ({
        "@type": "EducationalOccupationalCredential",
        name
      })),
      alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Faisalabad Medical University" },
      { "@type": "Organization", name: "College of Physicians and Surgeons of Pakistan" }],

      memberOf: { "@type": "Organization", name: "Society for Cardiovascular Angiography and Interventions" },
      knowsAbout: [
      "Interventional Cardiology",
      "Coronary Angiography",
      "Percutaneous Coronary Intervention",
      "Primary PCI",
      "Cardiac Catheterization",
      "Coronary Artery Disease"]

    };
    if (contact.phone) physician.telephone = contact.phone;
    if (contact.email) physician.email = contact.email;
    if (doctor.portraitUrl) physician.image = doctor.portraitUrl;
    if (siteConfig.social.length) physician.sameAs = siteConfig.social.map((s) => s.url);

    const data = {
      "@context": "https://schema.org",
      "@graph": [physician, { "@type": "WebSite", "@id": `${url}/#website`, url, name: doctor.name }]
    };

    document.getElementById("structured-data")?.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "structured-data";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}