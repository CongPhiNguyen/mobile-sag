import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { Button, Card, Popconfirm } from "antd"
import { updateProduct } from "./mainSlice"
export default function Cart(props) {
  const [isLoading, setIsLoading] = useState(true)
  const randomPage = Math.floor(Math.random() * 2 + 1)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productArr = useSelector((state) => {
    return state.mainSlice.products
  })
  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <div>
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/scan" className="text-[16px]">
          {" "}
          {"<<"} Back to scan
        </NavLink>
      </div>
      {!isLoading &&
        productArr.map((val) => {
          return (
            <div>
              <Card className="!border-[1px] !border-[#000] !mx-[20px] h-[100px]">
                <div className="flex relative">
                  <div>
                    <img
                      src={val.productInfo.images[0]}
                      alt=""
                      className="w-[60px] h-[60px] border-[1px] border-[#000]"
                    />
                  </div>
                  <div className="ml-[20px]">
                    <p className="text-[20px] font-[700]">
                      {val.productInfo.title}
                    </p>
                    <p className="mt-[-13px] text-[16px]">{`$${
                      val.productInfo.price
                    } x ${val.amount} =  $${
                      val.productInfo.price * val.amount
                    }`}</p>
                  </div>
                  <div className="absolute right-0">
                    <Popconfirm
                      title="Delete this product?"
                      onConfirm={() => {
                        console.log(val.idProduct)
                        let newListUpdate = []
                        for (let i = 0; i < productArr.length; i++) {
                          if (productArr[i].idProduct != val.idProduct) {
                            newListUpdate.push({
                              idProduct: productArr[i].idProduct,
                              amount: productArr[i].amount,
                              productInfo: productArr[i].productInfo
                            })
                          }
                        }
                        dispatch(updateProduct(newListUpdate))
                        props.socketRef.current.emit("update-product-user", {
                          id: props.socketId,
                          product: newListUpdate.map((val) => {
                            return {
                              idProduct: val.idProduct,
                              amount: val.amount
                            }
                          })
                        })
                      }}
                      onCancel={() => {}}
                      okText="Yes"
                      cancelText="No"
                    >
                      <a href="#">Delete</a>
                    </Popconfirm>
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      <div className="flex mx-[20px] text-[18px]">
        <p className="font-[700]">Total Amount</p>
        <p className="ml-[20px]">
          {"$"}
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
          className="!w-[calc(100%-40px)] !mx-[20px] !pb-[40px] !text-[20px]"
          type="primary"
        >
          Pay
        </Button>
      </div>
    </div>
  )
}
