import Feature from "./Feature";
import featuresData from "../../../data/featuresData";

export default function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature, index) => (
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
