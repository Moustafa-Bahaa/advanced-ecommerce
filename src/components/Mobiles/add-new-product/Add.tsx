import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "../../../styles/shared.css"
import { useCallback, useState } from "react";
import { MobilesModel } from "../../../models/mobilesModel"
import { useNavigate } from "react-router-dom"
import { addNewProduct } from "../../../services/mobilesService";
import { InputNumber } from 'primereact/inputnumber';

const Add = () => {

    const [addProductModel, setAddProductModel] = useState(new MobilesModel());

    const navigate = useNavigate()

    const handleOnChange = useCallback((event: React.ChangeEvent<any>) => {
        const val = (event.target && event.target.value) || '';
        let _addProductModel = { ...addProductModel };
        _addProductModel[`${event.target.name}`] = val;
        setAddProductModel(_addProductModel);
    }, [addProductModel])

    

    const onSaveCicked = () => {
        if(addProductModel.image && addProductModel.category && addProductModel.desc &&addProductModel.name && addProductModel.price){
            addNewProduct(addProductModel)
            .then(() => {
                navigate("/")
            });
        }else{
            alert("all fields required ")
        }
       
    }

    return (
        <div className="add-form">
            <div>
                <h1>New Product</h1>
            </div>
            <div className="form-inputs">
                <InputText placeholder="image url" value={addProductModel.image} name={"image"} onChange={handleOnChange} />
                <InputText placeholder="category" value={addProductModel.category} name={"category"} onChange={handleOnChange} />
                <InputText placeholder="name" value={addProductModel.name} name={"name"} onChange={handleOnChange} />
                <InputText placeholder="description" value={addProductModel.desc} name={"desc"} onChange={handleOnChange} />
                <InputNumber placeholder="price" value={addProductModel.price} name={"price"} onChange={(e)=> setAddProductModel({ ...addProductModel, price: e.value })} />
            </div>
            <div>
                <Button label="Save" onClick={onSaveCicked} />
            </div>

        </div>
    )
}

export default Add
