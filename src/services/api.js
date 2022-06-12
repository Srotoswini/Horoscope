import setSigns from "../App"
import React from "react"

// for zodiac signs
export const getSigns = async () => {
    const response = await fetch("http://sandipbgt.com/theastrologer/api/sunsigns/")
  return await response.json()
}

// for horoscope
export const getHoroscope = async (sign, time) => {
const response = await fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${sign}/${time}`)
const { horoscope } = await response.json()
return horoscope
}
