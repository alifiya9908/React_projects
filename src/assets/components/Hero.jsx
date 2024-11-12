const HeroSection = () => {
  return (
    <main className="Hero container">
      <div className="Hero"></div>
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Available On </p>
          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="Hero-image">
        <img src="/images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
};
export default HeroSection;
