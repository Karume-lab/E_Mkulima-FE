import React, { useState } from 'react';
import ProduceForm from '../../components/ProduceForm';
import ProduceList from '../produce_list/ProduceList';
import { produce as initialProduce } from '../../MOCK_DATA';
import { Produce } from '../../interfaces/interfaces';

const AdminPanel: React.FC = () => {
    const [produce, setProduce] = useState<Produce[]>(initialProduce);

    const addProduct = (product: Produce) => {
        setProduce([...produce, product]);
    };

    const updateProduct = (updatedProduct: Produce) => {
        setProduce(produce.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    };

    const deleteProduct = (id: number) => {
        setProduce(produce.filter(product => product.id !== id));
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl text-center text-white mb-4">Admin Panel</h2>
            <div className="mb-6">
                <ProduceForm onAddProduct={addProduct} />
            </div>
            <ProduceList
                produce={produce}
                onUpdateProduct={updateProduct}
                onDeleteProduct={deleteProduct}
                isAdminPanel={true}            />
        </div>
    );
};

export default AdminPanel;
