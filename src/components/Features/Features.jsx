import Feature from "./Feature";
import chat from "../../assets/icon-chat.png";
import money from "../../assets/icon-money.png";
import security from "../../assets/icon-security.png";

export default function Features() {
  const features = [
    {
      img: chat,
      alt: "Chat icon",
      title: "Your are our #1 priority",
      text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      img: money,
      alt: "Money icon",
      title: "More savings means higher rates",
      text: "The more you save with us, the higher your interest rate will be!",
    },
    {
      img: security,
      alt: "Security icon",
      title: "Security you can trust",
      text: "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {features.map((feature, index) => (
        <Feature
          key={index}
          img={feature.img}
          alt={feature.alt}
          title={feature.title}
          text={feature.text}
        />
      ))}
    </section>
  );
}
