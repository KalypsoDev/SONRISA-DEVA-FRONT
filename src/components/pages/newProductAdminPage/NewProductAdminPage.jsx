import React from 'react';
import ProductFormAdmin from '../../molecules/productFormAdmin/ProductFormAdmin';
import Sidebar from '../../molecules/sidebar/Sidebar';
import FetchApi from '../../../services/FetchApi';
import useSweetAlerts from '../../../services/useSweetAlerts';

const NewProductAdminPage = () => {

    const { showLoadingAlert, showSuccessAlert, showErrorAlert } = useSweetAlerts();

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        showLoadingAlert("Agregando Producto", "Por favor, espera...");

        try {
            const newProduct = await FetchApi.createProduct(formData);
            console.log('Producto agregado con éxito:', newProduct);
            showSuccessAlert("¡Producto agregado con éxito!");
        } catch (error) {
            console.error('Error al agregar el producto:', error);
            showErrorAlert("¡Error al agregar el producto!");
        }
    };

    const handleCancel = () => {
        console.log('Creación de producto cancelada');
    };

    return (
        <>
            <Sidebar />
            <ProductFormAdmin
                title="AGREGAR PRODUCTO"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
            />
        </>
    );
};

export default NewProductAdminPage;
