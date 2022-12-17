import { Button } from "antd"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import data from "./data.json"
import { addProducts } from "./mainSlice"

export default function Product(props) {
  // console.log("props")
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [currentProduct, setCurrentProduct] = useState()
  const [numberBuy, setNumberBuy] = useState(1)
  const [socketId, setSocketId] = useState("")
  const currentList = useSelector((state) => {
    return state.mainSlice.products
  })
  console.log("props.socketId", props.socketId)
  useEffect(() => {
    for (const product of data) {
      if (params.id == product.id) {
        setCurrentProduct(product)
        return
      }
    }
  }, [])
  // console.log("currentProduct", currentProduct)
  return (
    <div>
      <div className="p-[20px] pb-[0px]">
        <NavLink to="/scan">Back to scan</NavLink>
      </div>
      <div className="text-[20px] text-center mt-[20px]">
        {currentProduct?.title}
      </div>
      <div className="border-[2px] border-[#000]">
        <img src={currentProduct?.images[0]} alt="" />
      </div>
      <div className="text-[12px] text-center mt-[10px]">
        {currentProduct?.description}
      </div>
      <div className="text-[18px] text-center mt-[20px]">
        ${(currentProduct?.price * numberBuy).toLocaleString()}
      </div>
      <div className="text-center">
        <button
          className="border-[1px]  px-[20px] py-[10px]"
          onClick={() => {
            setNumberBuy((prev) => {
              if (prev > 0) return prev - 1
              else return prev
            })
          }}
        >
          -
        </button>
        <input
          type="number"
          value={numberBuy}
          className="w-[80px] text-center border-[1px] h-[44px]"
        />
        <button
          className="border-[1px] px-[20px] py-[10px]"
          onClick={() => {
            setNumberBuy((prev) => prev + 1)
          }}
        >
          +
        </button>
      </div>
      <div className="text-center">
        <Button
          type="primary"
          onClick={() => {
            let newListUpdate = []
            let isFind = false
            for (let i = 0; i < currentList.length; i++) {
              if (currentList[i].idProduct == params.id) {
                newListUpdate.push({
                  idProduct: params.id,
                  amount: currentList[i].amount + numberBuy,
                  productInfo: currentList[i].productInfo
                })
                isFind = true
              } else {
                newListUpdate.push({
                  idProduct: currentList[i].idProduct,
                  amount: currentList[i].amount,
                  productInfo: currentList[i].productInfo
                })
              }
            }
            if (!isFind) {
              newListUpdate.push({
                idProduct: params.id,
                amount: numberBuy,
                productInfo: currentProduct
              })
            }
            dispatch(addProducts(newListUpdate))

            props.socketRef.current.emit("update-product-user", {
              id: props.socketId,
              product: newListUpdate.map((val) => {
                return {
                  idProduct: val.idProduct,
                  amount: val.amount
                }
              })
            })

            navigate("/cart")
          }}
        >
          Add to cart
        </Button>
      </div>
    </div>
  )
}
