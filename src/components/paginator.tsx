import React, {useState} from 'react';
import { FilterType } from '../redux/users-reducer';

export const Paginator: React.FC<PropTypes> = ({itemsCount, usersToShow, currentPage = 1, onPageClick, portionSize = 10, currentFilter}) => {
    let pagesCount = Math.ceil(itemsCount / usersToShow);
    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {pages.push(i);}

    const [currentPortion, setCurrentPortion] = useState(1);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (currentPortion - 1) * portionSize + 1;
    const rightPortionPageNumber = currentPortion * portionSize;

    return (
        <div className="users__pages">
            {currentPortion > 1 && <button className='users__page-button users__page-button--left' onClick={()=>{setCurrentPortion(currentPortion - 1)}}>&lt;</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
                .map((item) => {
                    return (
                        <span
                            key={item}
                            onClick={(evt) => {
                                onPageClick(item, usersToShow, currentFilter)
                            }}
                            className={`users__page ${currentPage === item ? 'users__page--active' : ''}`}
                        >
                            {item}
                        </span>
                    )
                })
            }
            {portionCount > currentPortion && <button className='users__page-button' onClick={()=>{setCurrentPortion(currentPortion + 1)}}>&gt;</button>}
        </div>
    );
};

type PropTypes = {
    itemsCount: number;
    usersToShow: number;
    currentPage?: number;
    onPageClick: (page: number, usersToShow: number, filter: FilterType) => void;
    portionSize?: number;
    currentFilter: FilterType;
};