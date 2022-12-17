import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Button } from "antd"
export default function Cart() {
  const [isLoading, setIsLoading] = useState(true)
  const randomPage = Math.floor(Math.random() * 2 + 1)
  const navigate = useNavigate()
  const productArr = useSelector((state) => {
    return state.mainSlice.products
  })
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/scan">Back to scan</NavLink>
      </div>
      {!isLoading &&
        productArr.map((val) => {
          return (
            <div>
              <div className="flex">
                <div>
                  <img
                    src={val.productInfo.images[0]}
                    alt=""
                    className="w-[60px] h-[60px] border-[1px] border-[#000]"
                  />
                </div>
                <div className="ml-[20px]">
                  <p>{val.productInfo.title}</p>
                  <div className="flex">
                    <p>{`$${val.productInfo.price} x ${val.amount} =  `}</p>
                    <p>{` $${val.productInfo.price * val.amount}`}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      <div className="flex">
        <p>Total Amount</p>
        <p className="ml-[20px]">
          {productArr.reduce((current, val) => {
            return current + val.productInfo.price * val.amount
          }, 0)}
        </p>
      </div>
      <div className="text-center">
        <Button
          onClick={() => {
            navigate("/pay")
          }}
        >
          Pay
        </Button>
      </div>
    </div>
  )
}
