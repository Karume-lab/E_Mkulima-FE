import React from 'react';
import { DivLink } from '../../components';
import ProduceList from '../produce_list/ProduceList';
const Categories: React.FC = () => {
    return (
        <>
            <DivLink route='/dashboard/produce/sell/locations' styling='' text='Locations' />
            <ProduceList />
        </>
    );
};

export default Categories;
