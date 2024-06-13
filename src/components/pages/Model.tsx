import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";


export const Model = () => {
    const params = useParams()
    const id = Number(params.id)
    const currentModel = adidasArr.find(el=> el.id === id)
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

