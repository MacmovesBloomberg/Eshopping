import React from "react";
import "./Card.css";
const Card = () => {
  const content = [
    { img: "https://unsplash.com/photos/Nv4QHkTVEaI", title: "T Shirt" },
    { img: "https://unsplash.com/photos/Nv4QHkTVEaI", title: "Trouser" },
    { img: "https://unsplash.com/photos/Nv4QHkTVEaI", title: "Shoes" },
    { img: "https://unsplash.com/photos/Nv4QHkTVEaI", title: "Innerwear" },
    { img: "https://unsplash.com/photos/Nv4QHkTVEaI", title: "Accessories" },
  ];

  return (
    <>
      {/* {content.map((item, i) => {
        return (
          <div>
            <div className="card-container">
              <div className="card-box">
                <img src={item.img} />
                <p>{item.title}</p>
              </div>
              <div className="card-details">
                <p>
                  Men's shirts are versatile and timeless garments that have
                  been a staple in fashion for decades. Designed to fit the male
                  physique, these shirts come in various styles, patterns, and
                  fabrics to suit different occasions and personal tastes.
                  Whether it's a classic white dress shirt for formal events or
                  a casual plaid button-down for a relaxed look, men's shirts
                  offer endless possibilities for creating stylish outfits
                </p>
              </div>
            </div>
          </div>
        );
      })} */}
      <div className="card-container left">
        <div className="card-box">
          <img src="src/assets/images/shirt.jpg" />
        </div>
        <div className="card-details">
          <p>
            Men's shirts are versatile and timeless garments that have been a
            staple in fashion for decades. Designed to fit the male physique,
            these shirts come in various styles, patterns, and fabrics to suit
            different occasions and personal tastes. Whether it's a classic
            white dress shirt for formal events or a casual plaid button-down
            for a relaxed look, men's shirts offer endless possibilities for
            creating stylish outfits
          </p>
        </div>
      </div>
      <div className="card-container right">
        <div className="card-details">
          <p>
            Pants, also known as trousers, are a fundamental and versatile
            garment in both men's and women's fashion. Designed to cover the
            lower body, pants offer comfort, functionality, and a wide range of
            styles to suit various occasions. They come in different cuts,
            including straight-leg, bootcut, skinny, and wide-leg, allowing
            individuals to express their personal style and fit preferences.
            Pants are typically made from various fabrics such as denim, cotton,
            linen, or synthetic blends, each offering different textures and
            levels of breathability.
          </p>
        </div>
        <div className="card-box">
          <img src="src/assets/images/trouser.jpg" />
        </div>
      </div>
      <div className="card-container left">
        <div className="card-box">
          <img src="src/assets/images/shoes.jpg" />
        </div>
        <div className="card-details">
          <p>
            Shoes are more than just a necessity; they are a fashion statement
            and a reflection of personal style. From athletic sneakers to
            elegant dress shoes, the world of footwear offers a vast array of
            options for both men and women. Shoes not only protect our feet from
            the elements and provide support and comfort but also play a crucial
            role in completing an outfit and enhancing overall appearance. With
            various designs, materials, and colors available, shoes allow
            individuals to express their personality and sense of fashion.
          </p>
        </div>
      </div>
      <div className="card-container right">
        <div className="card-details">
          <p>
            Accessories play a significant role in enhancing the style and
            overall appearance of men's outfits. From watches and belts to ties
            and cufflinks, these accessories add flair and detail to a man's
            ensemble. A well-chosen accessory can elevate a simple outfit to new
            heights of sophistication and elegance. Men's accessories come in a
            wide range of styles, materials, and designs, allowing individuals
            to express their personal taste and individuality.
          </p>
        </div>
        <div className="card-box">
          <img src="src/assets/images/accessory.jpg" />
        </div>
      </div>
    </>
  );
};

export default Card;
