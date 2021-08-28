import React from 'react'

//頁腳元件
const CardFooter = (props)=>{
    const {inputValue} = props;
    let criteria = {};
    if(!inputValue){
        criteria = {
            text: '---',
            backgroundColor: '#d3d8e2'
        };
    }else if(inputValue<15){
        criteria = {
            text: 'SLOW',
            backgroundColor: '#ee362d'
        };
    }else if(inputValue < 40){
        criteria = {
            text: 'GOOD',
            backgroundColor: '#1b82f1'
        };
    }
    else if(inputValue >= 40){
        criteria = {
            text: 'FAST',
            backgroundColor: '#13d569'
        };
    }
    return(
        <div 
            className="card-footer" 
            style={{
                backgroundColor:criteria.backgroundColor
            }}
        >
                {criteria.text}
        </div>
    );
};
export default CardFooter