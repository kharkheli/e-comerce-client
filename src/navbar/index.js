import React, { useState, useEffect } from 'react'
import './index.css'
import { MdKeyboardArrowDown, MdShoppingBag } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { cartItems } from './cartItems'
import { AiOutlineClose } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'

function Index() {
  const [slideUp, setSlideUp] = useState(false)

  // using cleanup and input so i can get current value of slideup and update
  //it only wen necessary
  useEffect(() => {
    const chekScroll = () => {
      if (window.scrollY > 300 && !slideUp) {
        setSlideUp(true)
        return
      }
      if (window.scrollY < 300 && slideUp) {
        setSlideUp(false)
      }
    }
    window.addEventListener('scroll', chekScroll)
    return () => {
      window.removeEventListener('scroll', chekScroll)
    }
  }, [slideUp])

  return (
    <nav className="navbar" style={{ top: slideUp ? '-60px' : '0px' }}>
      <div className="addition-to-navbar">
        <div className="additional-contacts">
          <h3 className="additional-contact additionals">
            contact us: <a href="tel:+995598658881">+(995) 598 658 881 </a>
          </h3>
          <h3 className="additional-contact additionals">
            email:{' '}
            <a href="mailto: iliakharkheli6@gmail.com">
              iliakharkheli6@gmail.com
            </a>
          </h3>
        </div>
        <div className="right-additionals">
          <div className="auth-links additionals">
            <a href="#">login</a> or <a href="#">register</a>
          </div>
          <div className="language additionals">
            en
            <MdKeyboardArrowDown
              style={{ fontSize: '20px', transform: 'translateY(6px)' }}
            />
            <div className="language-options">
              <ul>
                <li>EN</li>
                <li>FR</li>
                <li>IT</li>
                <li>SP</li>
              </ul>
            </div>
          </div>
          <div className="heart-idk additionals">
            <FiHeart style={{ transform: 'translateY(5px)' }} />
          </div>
          <div className="cart additionals">
            <div className="cart-visible">
              your bag{' '}
              <i className="shopping-bag">
                <span className="cart-number">5</span>
                <MdShoppingBag
                  style={{ fontSize: '20px', transform: 'translateY(5px)' }}
                />
              </i>{' '}
              <span style={{ color: 'var(--light-green)' }}>$1987.21</span>
            </div>
            <div className="cart-overflow">
              {cartItems.map((item) => {
                return (
                  <div className="cart-item" key={item.id}>
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-name">
                      <div>
                        <h3>{item.name}</h3>
                        <p>quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div className="white-line"></div>
                    <div className="cart-item-prices">
                      <div>
                        <p>${item.price}</p>
                        <p>total: ${item.price * item.quantity}</p>
                      </div>
                    </div>
                    <div className="white-line"></div>
                    <div className="cart-item-color">
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                    <div className="white-line"></div>
                    <div className="cart-item-remove">
                      <i className="remove-icon">
                        <AiOutlineClose />
                      </i>
                    </div>
                  </div>
                )
              })}
              <div className="cart-summary">
                <div className="total-cost">
                  total{' '}
                  <span style={{ color: 'var(--light-green)' }}>$1987.21</span>
                </div>

                <div className="goto-cart">
                  <div className="goto-top-cont">
                    <div className="goto-cart-cont">
                      <span
                        className="goto-cart-icon"
                        style={{
                          fontSize: '30px',
                          transform: 'translateY(5px)',
                        }}
                      >
                        <BsArrowRight />
                      </span>
                      <span className="goto-cart-text">
                        proceed-to checkout
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-links">
        <img
          src="http://unionagency.one/exzo/img/logo-2.png"
          style={{ position: 'absolute', left: '50px', top: '20px' }}
          alt="logo"
        />
        <div className="page-links">
          <div className="page-link active-page-link">home</div>
          <div className="page-link">about us</div>
          <div className="page-link">products</div>
          <div className="page-link">gallery</div>
          <div className="page-link">contact</div>
        </div>
      </div>
    </nav>
  )
}

export default Index
