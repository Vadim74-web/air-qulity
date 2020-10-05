import React from 'react';
import './SectorsList.css';
import SectorItem from './SectorItem';

const SectorsList = ({title,subtitle,item}) => {
    const itemsList = item.map((sector,i) => <SectorItem sector={sector} number={i+1} key={i}/> )

    return(
        <section className="sectors container">
            <h2 className="sectors-title">{title}</h2>
            <p className="sectors-subtitle">{subtitle}</p>
            <div className="sectors-list">

                    {itemsList}
                    

            </div>

        </section>

    );
};
export default SectorsList;