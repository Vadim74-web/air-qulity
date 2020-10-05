import React, {useState} from 'react';
import './HeroBlock.css';
import vect from '../../assets/Vector.svg';
import burger from '../../assets/burger.svg';

const HeroBlock = ({title,links,logos}) => {
    const [isBurgerShowing, setBurgerShowing] = useState(false);
    const logosImages = logos.map((logoItem,i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item" key={i}/>);
    const navItems = links.map((link,i) => <a href={link.href} className="hero-navigation-item" key="i">{link.title}</a>);
	 const toggleBurger = () => {
	 	setBurgerShowing(
	 		!isBurgerShowing
	 	)
     }

        return(
            <section className="hero" >
                <div className="container">
                    <div className="hero-partners">
                        {logosImages}
                        <img src={burger}  onClick={toggleBurger} className={` ${
                            isBurgerShowing
                                ? "hero-burger-show"
                                : "hero-burger"
                        }`}  alt="hero-burger"  />
                    </div>
                    <nav className="hero-navigation">
                        {navItems}
                    </nav>
                    <h1 className="hero-title">{title}</h1>
                    <a href="#" className="hero-link">Отследить</a>
                    <img src={vect} alt="vector" className="hero-vector" />
                </div>
            </section>
        );
    
};

export default HeroBlock;