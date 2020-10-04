import React from 'react';
import './App.css';
import HeroBlock from "./componets/HeroBlock/HeroBlock";
import SectorsList from './componets/SectorsList/SectorsList';
import Facts from './componets/Facts/Facts';
import Footer from './componets/Footer/Footer';
import AirQuality from './componets/AirQuality/AirQuality';
import gcLogo from './assets/GC_logo.svg';
import ITNLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_emozhl_logo.svg';





function App() {
  const partners = [
    shidLogo,
    ITNLogo,
    gcLogo
  ];
  const navLinks = [
    {
      title: "Основные факты",
      href: "#facts"
    },
    {
      title: "Индекс качества воздуха",
      href: "#quality"
    },
    {
      title: "Политика по уменьшению загрязнений",
      href: "#politics"
    }
  ];
  const factsSlides = [
    {
      id: '1332',
      imgUrl: require("./assets/facts-slider/slider-fact1.jpg"),
      desc: "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      id: '1333',
      imgUrl: require("./assets/facts-slider/slider-fact2.jpg"),
      desc: "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      id: '1334',
      imgUrl: require("./assets/facts-slider/slider-fact3.jpg"),
      desc: "Загрязнение воздуха – нарушение прав человека"
    },
    {
      id: '1335',
      imgUrl: require("./assets/facts-slider/slider-fact4.jpg"),
      desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      id: '1336',
      imgUrl: require("./assets/facts-slider/slider-fact5.jpg"),
      desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    },
  ];
  const sectors = [
    {
      name: "Промышленность",
      imgUrl:  require("./assets/sectors-slider/sector-slide1.jpg"),
      description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
    },
    {
      name: "Транспорт",
      imgUrl:  require("./assets/sectors-slider/sector-slide2.jpg"),
      description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
    },
    {
      name: "Городское планирование",
      imgUrl:  require("./assets/sectors-slider/sector-slide3.jpg"),
      description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
    },
    {
      name: "Энергия",
      imgUrl:  require("./assets/sectors-slider/sector-slide4.jpg"),
      description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
    },
    {
      name: "Энергетика",
      imgUrl:  require("./assets/sectors-slider/sector-slide5.jpg"),
      description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
    },
    {
      name: "Утилизация отходов",
      imgUrl:  require("./assets/sectors-slider/sector-slide6.jpg"),
      description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
    }
  ];
  const autor = "Никитой Ямником";
  const designer = "Валерией Бубырь";

  return (
    <>  
      <HeroBlock title="Качество атмосферного воздуха и здоровье" 
        logos={partners}
        links={navLinks}/>
      <Facts title="Основные факты" slides={factsSlides}/>
      <AirQuality />
      <SectorsList title="Политика по уменьшению загрязнений" subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:" item={sectors}/>
      <Footer partners={partners} links={navLinks} autor={autor} designer={designer} />
    </>
  );
}

export default App;
