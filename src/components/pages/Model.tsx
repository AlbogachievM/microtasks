import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "./Adidas";
import {pumaArr, PumaItem} from "./Puma";

type CrossModelType = {
    [key: string]: (AdidasItem[] | PumaItem[])
}
const crossModel: CrossModelType = {
    adidas: adidasArr,
    puma: pumaArr
}
export const Model = () => {
    const {id, model} = useParams()
    console.log(model)
    const currentModel = model && crossModel[model].find(el => el.id === Number(id))


    return (
        <div>
            {currentModel ?
                <>
                    <h1>{currentModel.model}</h1>
                    <span>{currentModel.collection}</span>
                    <span>{currentModel.price}</span>
                    <img src={currentModel.picture} alt={currentModel.model}/>
                </>
                : <h2>Такой модели не существует</h2>
            }
        </div>
    );
};

