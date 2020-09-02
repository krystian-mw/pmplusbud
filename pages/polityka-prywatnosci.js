import "../styles/pages/PrivacyPolicy.scss";

const sections = [
  {
    title: "Podstawowe korzystanie strony",
    paragraphs: [
      "W trakcie korzystania strony nie zbieramy danych które " +
        "uniemożliwiają nam zidentyfokowania nam żadnego użytkownika " +
        "bezpośrodnio.",
      "Zbierane informacje przez podstawowe korzystanie strony są później " +
        "używane wyłącznie w celach analitycznych, które są przetwarzane przez " +
        "Google Analytics w celu świadczenia lepszych usług.",
      "Informacje zdobyte w ten sposób nie są udostępniane osobom trzecim. ",
    ],
    links: ["https://policies.google.com/privacy?hl=pl-PL"],
  },
  {
    title: "Prawo odstąpienia",
    paragraphs: [
      "Użytkownik ma prawo o prośbę usunięcia wszystkich danych z nim związane.",
    ],
    links: ["https://pmplusbud.pl/kontakt"],
  },
];

export default function PrivacyPolicy() {
  return (
    <div id="PrivacyPolicy">
      {sections.map((section, index) => (
        <section key={index}>
          <h5>&sect; {index + 1}</h5>
          <h6>{section.title}</h6>
          {section.paragraphs.map((paragraph, index) => (
            <p>{paragraph}</p>
          ))}
          {section.links.map((link) => (
            <a key={link} href={link} target="_blank" children={link} />
          ))}
        </section>
      ))}
    </div>
  );
}
