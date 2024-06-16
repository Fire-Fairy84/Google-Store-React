import AddToCart from "../../components/addToCart/AddToCart";
import "./earbuds.css";
import Selector from "../../components/selector/Selector";
import { useState } from "react";

const Earbuds = () => {
  const [color, setColor] = useState("blue");
  const [image, setImage] = useState(
    "src/assets/images/earbuds/earbuds_01.png"
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div class="header-bottom">
        <p class="details">🡨 See product details</p>
      </div>
      <div className="container-earbuds">
        <section class="images-section">
          <div class="samples">
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_01.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_02.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_03.png"
            />
            <input
              id="model-earbud"
              type="image"
              src="src/assets/images/earbuds/earbuds_04.png"
            />
          </div>
        </section>
        <img
          class="main-banner"
          src="src/assets/images/earbuds/earbuds_01.png"
          alt="Earbuds"
        />
        <section class="main-aside">
          <article id="description">
            <h1>Google Pixel Buds Pro</h1>
            <span>Music & Sound</span>
            <p class="price">229 €</p>
            <hr />
          </article>
          <article id="choose">
            <span>Choose a color</span>
            <div class="colors">
              <button
                style={{ borderWidth: color === "blue" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("blue");
                  setImage("src/assets/images/earbuds/earbuds_01.png");
                }}
                id="blue"
              />
              <button
                style={{ borderWidth: color === "white" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("white");
                  setImage("src/assets/images/earbuds/earbuds_02.png");
                }}
                id="white"
              />
              <button
                style={{ borderWidth: color === "black" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("black");
                  setImage("src/assets/images/earbuds/earbuds_03.png");
                }}
                id="black"
              />
              <button
                style={{ borderWidth: color === "grey" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("grey");
                  setImage("src/assets/images/earbuds/earbuds_04.png");
                }}
                id="grey"
              />
              <button
                style={{ borderWidth: color === "green" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("green");
                  setImage("src/assets/images/earbuds/earbuds_05.png");
                }}
                id="green"
              />
              <button
                style={{ borderWidth: color === "orange" ? "3px" : "1px" }}
                onClick={() => {
                  setColor("orange");
                  setImage("src/assets/images/earbuds/earbuds_06.png");
                }}
                id="orange"
              />
            </div>
          </article>

          <div className="buy">
            <p className="titles bold">229 €</p>
            <div className="option-container">
              <Selector setQuantity={setQuantity} />
              <AddToCart
                color={color}
                quantity={quantity}
                product={"earbuds"}
                image={image}
                price={229}
              />
            </div>
            <p className="delivery text-bold bold">
              <img src="src/assets/images/icons/Delivery.svg" alt="delivery" />
              Delivers 29 Apr to <span>08023</span>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Earbuds;
