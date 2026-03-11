import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Title from '../components/Title';
import wishlistBcg from '../images/productsBcg.jpeg';
import {
  addToCart,
  clearWishlist,
  removeWishlistItem,
} from '../store/actions/products';

function WishlistPage() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.wishlist);

  return (
    <>
      <Hero img={wishlistBcg} title="wishlist" />
      <section className="py-5">
        <div className="container">
          <Title title="your wishlist" center />
          {wishlist.length === 0 ? (
            <div className="text-center text-title py-5">
              your wishlist is empty
              <div className="mt-4">
                <Link to="/products" className="main-link">
                  browse products
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="row">
                {wishlist.map((item) => (
                  <div
                    className="col-10 mx-auto col-sm-8 col-md-6 col-lg-4 my-3"
                    key={item.id}
                  >
                    <div className="card h-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="card-img-top p-4"
                        height="260px"
                      />
                      <div className="card-body d-flex flex-column">
                        <h6 className="text-title">{item.title}</h6>
                        <p className="text-main mb-4">${item.price}</p>
                        <div className="mt-auto d-flex flex-wrap gap-2">
                          <button
                            className="main-link"
                            onClick={() => dispatch(addToCart(item.id))}
                          >
                            add to cart
                          </button>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => dispatch(removeWishlistItem(item.id))}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(clearWishlist())}
                >
                  clear wishlist
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default WishlistPage;
