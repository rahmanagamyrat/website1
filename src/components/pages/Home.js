import React from 'react'
import './Home.css'
import img2 from '../img/img21.jpg'
import img3 from '../img/img14.jpg'
import img6 from '../img/img16.jpg'
import img4 from '../img/img18.jpg'
import img5 from '../img/img19.jpg'


export const Home = () => {
    return (
        <div>
            <div className='home-div'>
                <div className="home-div1">
                    <h2 className='home-h22'>Restoran adi</h2>
                    <button className="home-button"><a className="home-a" href='https://www.instagram.com/cristiano/' target="_blank" rel="noopener noreferrer">sipariş ver</a></button>
                </div>
            </div>
            <div className='home-container'>
                <div className='home-cep'>
                    <h1 className='home-h1'>Restoran MUTFAĞI</h1>
                    <h1 className='home-h3'>Ankara nefis mutfağının tadını çıkarın. 2013 yılından bu yana tecrübeli şeflerimiz ve mutfak ekibimiz tarafından taze hazırlanmış yemekler sunuyoruz.</h1>
                </div>
                <div className='home-sag'>
                    <div className="home-back1"><img className="home-surat" src={img3} alt=''></img></div>
                    <div className="home-back2"><img className="home-surat" src={img4} alt=''></img></div>
                    <div className="home-back3"><img className="home-surat" src={img5} alt=''></img></div>
                    <div className="home-back4"><img className="home-surat" src={img6} alt=''></img></div>
                </div>
            </div>
            <div className='home-container'>
                <div className='home-div3'>
                    <img className="home-surat" src={img2} alt=''></img>
                </div>
                <div className="home-cep">
                    <h1 className='home-h222'>Biz Ne Sunuyoruz</h1>
                    <h1 className='home-h3'>Otantik ve lezzetli yemek çeşitlerimizle kendinizi şımartın. Çorbalar, salatalar, mezeler ve humus tabakları ile mükemmel bir şekilde hazırlanmış hazır yemekler sunuyoruz.</h1>
                </div>
            </div>
        </div>
    );
};
