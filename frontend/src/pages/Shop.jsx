import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/Popular/Popular'
import Offers from "../components/offers/offers"
import NewsLetter from "../components/newsLetter/newsLetter"
import NewCollections from '../components/NewCollections/NewCollections'


const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter />
    </div>
  )
}

export default Shop