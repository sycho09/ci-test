const Greet = ({ lastname = "none" }) => {
  return <p>Hello {lastname}</p>;
};

export default Greet;
