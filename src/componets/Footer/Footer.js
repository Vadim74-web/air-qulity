import React from 'react';
import './Footer.css';

const Footer = ({partners,links,autor,designer}) => {
    const partnersLogos = partners.map((logo,i) => <img key={i} src={logo} alt={'partner logo'} className="footer-partners-item" />);
const navLinks = links.map((links,i) => <a href="{links.href}" key={i} className="footer-nav-link">{links.title}</a>)

    return (
        <section className="footer">
            <div className="container">
                <div className="footer-partners">
                    {partnersLogos}
                </div>
            
                <div className="footer-text-wrap">
                    <div className="footer-nav">
                        {navLinks}
                    </div>
                    <p className="footer-nav-text">Сайт был разработан <span className="text-yellow">{autor}</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yellow">{designer}</span>.</p>
                </div>
                <p className="footer-text">
                    2020, Все права защищены
                </p>
                <p className="footer-text">
                Согласие на обработку персональных данных<br />
                Политика конфиденциальности     
                </p>
            </div>
        </section>

    );
};

export default Footer;