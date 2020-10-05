import React, {useState} from 'react';

const SectorItem = ({sector,number}) => {
    const [isToolTipShowing, setToolTipShowing] = useState(false);
    const [isDirectionSwitched, setDirectionSwitched] = useState(false);
//        const toggleToolTip = (newValue) => {
//            setDirectionSwitched(true);
//            setToolTipShowing(newValue);
//        }

    return(
        <div className="sectors-list-item" onMouseEnter={() => setToolTipShowing(true)} onMouseLeave={() => setToolTipShowing(false)} style={{background: `url(${sector.imgUrl}) center no-repeat`, backgroundSize: 'cover'}}>
        <p className="sectors-list-item-name">
            {sector.name}
        </p>
		{
			isToolTipShowing && <p className={`sectors-list-item-tooltip ${
				(number % 3 === 0)
					? "sectors-list-item-tooltip-switched"
					: ""
		}`}>

            {sector.description}
        </p>
        };
    </div>
    );
};

export default SectorItem;
