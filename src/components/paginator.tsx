import React from 'react';
import { FilterType } from '../redux/users-reducer';
import {  Pagination  } from 'antd';

export const Paginator: React.FC<PropTypes> = ({itemsCount, usersToShow, onPageClick, currentFilter}) => {
    
    return (
        <div style={{marginBottom: '24px'}}>
            <Pagination 
                defaultCurrent={1} 
                total={itemsCount} 
                defaultPageSize={usersToShow} 
                simple={true}
                onChange={(page, usersToShow)=>{
                    onPageClick(page, usersToShow as number, currentFilter)
                }}>
            </Pagination>
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