const faqs = [
  {
    q: "Who owns the ad accounts?",
    a: "You do. All Meta and Google Ads accounts, tracking, and data stay in your name, always.",
  },
  {
    q: "Why is the Ads Launch a fixed price?",
    a: "A fixed scope means no surprise invoices and a clear deliverable — tracking and campaigns live by a set date.",
  },
  {
    q: "Why a 3-month minimum for the retainer?",
    a: "Ad accounts need a learning phase. Three months is the minimum runway to test, optimize, and see real trends.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. I handle the tracking, pixel, and platform setup — you just need access to your accounts and assets.",
  },
  {
    q: "What happens after launch?",
    a: "You get full documentation and a handoff call. You can run it yourself or move into a Growth Retainer.",
  },
  {
    q: "Can I verify the case studies?",
    a: "Yes — references are available on request for any of the outcomes listed above.",
  },
  {
    q: "Is it just you, or a team?",
    a: "It's me directly on strategy and account management, with trusted specialists brought in for creative when needed.",
  },
  {
    q: "How is this different from an agency?",
    a: "No account manager layer — you work directly with the person running your campaigns.",
  },
  {
    q: "How is ad spend handled?",
    a: "Ad spend is billed directly by Meta/Google to your own payment method — I never touch or mark up your ad budget.",
  },
  {
    q: "Is there a minimum budget to work together?",
    a: "Generally a monthly ad spend and business revenue that can support a retainer — happy to confirm fit on a call.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="section__inner">
        <p className="eyebrow">Before You Book, Read This</p>
        <h2 className="section__title">Frequently asked questions</h2>
        <div className="faq__list">
          {faqs.map((item) => (
            <details className="faqItem" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
