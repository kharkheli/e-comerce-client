import React, { useState, useEffect, useRef } from 'react'
import { MdShoppingBag } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

function SliderItem({
  img,
  title,
  headline,
  desc,
  descList,
  price,
  index,
  move,
}) {
  const image = useRef(null)
  const [shadowX, setShadowX] = useState(0)

  // there is a sun which projects a shadow on images
  useEffect(() => {
    const imgRect = image.current.getBoundingClientRect()
    const sunX = window.innerWidth / 2
    setShadowX((imgRect.left + imgRect.width / 2 - sunX) * 0.1)
    console.log((imgRect.left + imgRect.width / 2 - sunX) * 0.1)
    // when move is stopped it doesn't mean that slides have stopped moving
    // becaue of transition
    if (!move) {
      const interval = setInterval(() => {
        const imgRect = image.current.getBoundingClientRect()
        const sunX = window.innerWidth / 2
        setShadowX((imgRect.left + imgRect.width / 2 - sunX) * 0.1)
      }, 10)
      setTimeout(() => {
        clearInterval(interval)
      }, 600)
    }
  }, [move])
  return (
    <div className="slider-item-cont">
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `translateX(${move * 0.15}px)`,
        }}
      >
        <img
          ref={image}
          className="slider-image"
          src={img}
          alt={title}
          style={{
            filter: `drop-shadow(${shadowX}px 20px 4px rgba(0, 0, 0, 0.7))`,
            ...(index % 2 === 1 ? { right: '20px' } : { left: '20px' }),
          }}
        />
        <div
          className="slider-item-info"
          style={index % 2 === 0 ? { right: '20px' } : { left: '20px' }}
        >
          <h4>{headline}</h4>
          <h1>{title}</h1>
          <div className="title-underline"></div>
          <div className="slider-item-desc">
            <p>{desc}</p>
            <ul>
              {descList.map((desc, index) => {
                return <li key={index}>{desc}</li>
              })}
            </ul>
            <div className="slider-item-info-footer">
              <h3 className="slider-item-price">best price: ${price}</h3>
              <div className="slider-item-btns-cont">
                <div
                  className="slider-item-btn-cont"
                  style={{ backgroundColor: '#fff', color: '#555555' }}
                >
                  <div className="slider-item-btn">
                    <div className="slider-item-btn-content">
                      <span className="slider-item-btn-icon">
                        <BsArrowRight />
                      </span>
                      <span className="slider-item-btn-text">learn more</span>
                    </div>
                  </div>
                </div>
                <div
                  className="slider-item-btn-cont"
                  style={{ backgroundColor: '#343434', color: '#fff' }}
                >
                  <div className="slider-item-btn">
                    <div className="slider-item-btn-content">
                      <span className="slider-item-btn-icon">
                        <MdShoppingBag />
                      </span>
                      <span className="slider-item-btn-text">add to cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderItem
