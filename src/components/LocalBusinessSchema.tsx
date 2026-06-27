export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Ridha Aluminium & Fabrications",
    image: "https://ridhaaluminium.com/images/og-image.jpg",
    url: "https://ridhaaluminium.com",
    telephone: "+91-7411314324",
    email: "info@ridhaaluminium.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: [
      "Mangalore",
      "Udupi",
      "Dakshina Kannada",
    ],
    description:
      "Premium aluminium fabrication services including aluminium windows, sliding windows, glass facades, ACP cladding, shower partitions, wardrobes, and glass railings.",
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}