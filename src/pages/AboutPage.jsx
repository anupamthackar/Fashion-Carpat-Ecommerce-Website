import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to Fashion Carpet, your ultimate destination for style and sophistication.
          <br></br>
          At Fashion Carpet, we're dedicated to offering a diverse selection of fashion-forward clothing, accessories, and electronic devices to elevate your lifestyle. Whether you're looking to refresh your wardrobe with the latest trends, upgrade your tech game with cutting-edge gadgets, or add a touch of sparkle to your ensemble with exquisite jewelry, we've got you covered.
          <br></br>
          <br></br>

          Our journey began with a passion for bringing the latest fashion trends to your doorstep. From chic streetwear to elegant evening wear, our carefully selected collections reflect the diversity and dynamism of contemporary fashion. And now, with the addition of electronic devices and jewelry, we're expanding our offerings to cater to all aspects of your modern lifestyle.
          <br></br>
          <br></br>

          Quality and customer satisfaction are at the heart of everything we do. That's why we partner with trusted brands and designers, ensuring that every product you purchase is crafted with the utmost care and attention to detail. And with our seamless online shopping experience, you can explore our collections from the comfort of your home, with just a few clicks.
          <br></br>
          <br></br>

          Whether you're a fashion maven, a tech enthusiast, or a jewelry aficionado, we invite you to join us on this journey of self-expression and discovery. Welcome to Fashion Carpet – where every purchase is a statement, and every customer is a valued member of our community.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage