import React from 'react';
import './header.css'
import Slider from '../Components/gallre/salider/Slider';

const Header = () => {
    return (
                <>
                       <div className='bg-green-200'>
              <div className="carousel total-width mx-auto">
                    <div id="item1" className="carousel-item w-full">
                        <img  src="https://c4.wallpaperflare.com/wallpaper/1016/903/650/render-superman-black-uniform-wallpaper-preview.jpg" className="img-height" />
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://static.gamesmen.com.au/media/catalog/product/cache/43c1b9e48526c06c9c8010675100b71d/h/o/hot_toys_marvel_iron_man_mark_iii_2_0_16_scale_12_figure_1__1.jpg" className="img-height" />
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://cdn.shopify.com/s/files/1/0523/0955/7435/products/fullsizeoutput_1c3_1024x1024.jpg?v=1615916893" className="img-height" />
                    </div> 
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://www.superherohype.com/wp-content/uploads/sites/4/2022/01/Hot-Toys-Goblin-featured.jpg?w=640" className="img-height" />
                    </div>
                </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a  href="#item1" className="btn btn-xs btn-outline btn-error">1</a> 
                        <a href="#item2" className="btn btn-xs btn-outline btn-warning">2</a> 
                        <a href="#item3" className="btn btn-xs btn-outline btn-error">3</a> 
                        <a href="#item4" className="btn btn-xs btn-outline btn-warning">4</a>
                    </div>
            </div>                
                <div className="mt-38 bg-lime-300">
                    <Slider></Slider>
                </div>
                </>
            );
};

export default Header;