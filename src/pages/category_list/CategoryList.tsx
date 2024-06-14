import DivLink from '../../components/DivLink';
import ProduceList from '../produce_list/ProduceList';
const Categories = () => {
    return (
        <>
            <DivLink route='/dashboard/produce/sell/locations' styling='' text='Locations' />
            <ProduceList />
        </>
    );
};

export default Categories;
