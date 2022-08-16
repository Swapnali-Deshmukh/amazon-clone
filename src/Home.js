import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
           <div className='home__row'>
           <Product
                id="1"
                title="Bhagavad Gita Original in English - Bhagavad Gita as It is Original in English Hardcover – 1 January 2020"
                price={267}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/518aPMbn8uL._SX292_BO1,204,203,200_.jpg"
            />
              <Product
                id="2"
                title="Bajaj Rex 500W Mixer Grinder with Nutri-Pro Feature, 3 Jars, White"
                price={2249}
                rating={5}
                image="https://m.media-amazon.com/images/I/51Ck4wmBbSL._SX679_.jpg"
            />
           </div>
           <div className='home__row'>
           <Product
                id="3"
                title="Redmi 80 cm (32 inches) Android 11 Series HD Ready Smart LED TV | L32M6-RA/L32M7-RA (Black)"
                price={13499}
                rating={5}
                image="https://m.media-amazon.com/images/I/71L-lTQnJiL._SX522_.jpg"
            />
              <Product
                id="4"
                title="R for Rabbit Tiny Toes Rapid Kids Bicycle 16 | T16 Smart Plug n Play Freeride Bicycle, Adjustable Handlebar, Magnesium Alloys Structural for Boys/Girls of Age 4 to 7 Years"
                price={267}
                rating={5}
                image="https://m.media-amazon.com/images/I/71ipkJ08fuL._SX522_.jpg"
            />
            <Product
                id="5"
                title="boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)"
                price={379}
                rating={5}
                image="https://m.media-amazon.com/images/I/719elVA3FvL._SX522_.jpg"
            />
           </div>
           <div className='home__row'>
           <Product
                id="6"
                title="Apple iPhone 13 (128GB) - Green"
                price={72990}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg"
            />
             
           </div>
          
        </div>
    )
}
export default Home
