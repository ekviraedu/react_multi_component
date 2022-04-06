import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="main">
        <h2>Paneer Butter Masala Recipe</h2>
        <h5>Posted on, April 10, 2022</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>Step by step photo and video recipe</p>
        <p>
          Paneer based meals and curries are one of the essential dishes to many
          vegetarians for their protein offerings. it can be added to rice,
          bread, pizza, sandwich and even deep-fried snacks, but curries are the
          popular choice. out of these paneer curries, the paneer butter masala
          recipe or also known as paneer makhani is a popular choice for its
          sweet and spicy curry taste..
        </p>
        <br />
        <h2>Vada Pav</h2>
        <h5>Posted on, Dec 30, 2021</h5>
        <div className="fakeimg" style={{ height: 200 }}>
          Image
        </div>
        <p>Step by step photo and video recipe</p>
        <p>
          Mumbai or previously referred as bombay is known for its fast life
          which basically can be seen its mumbai or marathi cuisine. most of the
          street or any popular tourist attraction places are filled with street
          vendors with myriad fast food dishes. vada pav is one such easy and
          tasty fast food dish, filled with carbohydrates and fibre.
        </p>
      </div>
    );
  }
}

export default Content;
