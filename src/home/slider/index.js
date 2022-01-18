import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import SliderItem from './SliderItem'
import { slides } from './slides'

function Index() {
  const slider = useRef(null)
  const [slidebi, setSlidebi] = useState([
    slides[slides.length - 1],
    ...slides,
    slides[0],
  ])
  const [slideWidth, setSlideWidth] = useState(0)
  // const [slideOrder, setSlideOrder] = useState([2, 0, 1])
  const [slideN, setSlideN] = useState(1)
  const [startX, setStartX] = useState(0)
  const [move, setMove] = useState(0)
  useEffect(() => {
    slider.current.addEventListener('mousedown', (e) => {
      setStartX(e.clientX)
    })
    slider.current.addEventListener('mouseup', () => {
      setStartX(0)
      setMove(0)
    })
    setSlideWidth(slider.current.offsetWidth)
    window.addEventListener('resize', () => {
      setSlideWidth(slider.current.offsetWidth)
    })
  }, [])
  useEffect(() => {
    if (startX) {
      // recent and current x arent really x cordinates but the last shift
      let recentX = 0
      let currentX = 0
      let dX = 0
      // const
      const speed = () => {
        dX = currentX - recentX
        recentX = currentX
      }
      // i check for the dX where t = 10ms and depending on last mouse speed
      // deciding whether to slide to next or not
      const interval = setInterval(speed, 10)
      const slide = (e) => {
        currentX = e.clientX - startX
        setMove(e.clientX - startX)
      }
      slider.current.addEventListener('mousemove', slide)
      return () => {
        // if mouse was moved more than a 20px in last 10ms
        //or slider is more than a halfway slided then change slide

        // if (Math.abs(dX) > 20 || currentX * 2 > slider.current.offsetWidth) {
        //   setSlideOrder((order) => {
        //     if (currentX >= 0) {
        //       console.log([...order.slice(1), order[0]])
        //       return [...order.slice(1), order[0]]

        //     } else {
        //       const n = order.length - 1
        //       console.log([order[n], ...order.slice(0, n)])
        //       return [order[n], ...order.slice(0, n)]
        //     }
        //   })
        // }
        if (
          Math.abs(dX) > 15 ||
          Math.abs(currentX * 2) > slider.current.offsetWidth
        ) {
          setSlideN((n) => {
            // by using reminders i dont have to check if it is in range
            if (currentX < 0) {
              const newN = (n + 1) % 5
              return newN === 4 ? 1 : newN
            } else {
              const newN = (n + 4) % 5
              return newN === 0 ? 3 : newN
            }
          })
        }
        clearInterval(interval)
        slider.current.removeEventListener('mousemove', slide)
      }
    }
  }, [startX])
  return (
    <div className="slider" ref={slider}>
      <div
        className="slider-cont"
        style={{
          transition: !startX ? null : 'none',
          transform: `translateX(${move - slideN * slideWidth}px)`,
        }}
      >
        {slidebi.map((slide, index) => {
          return (
            <div
              className="slider-item"
              key={slide.id + index}
              style={{
                backgroundImage: `url(${slide.bgImg})`,
                width: slideWidth,
              }}
            >
              <SliderItem {...slide} index={index} move={move} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index
