import PropTypes from "prop-types";

export default function Feature({ img, alt, title, text }) {
  return (
    <div className="feature-item">
      <img src={img} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

Feature.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
