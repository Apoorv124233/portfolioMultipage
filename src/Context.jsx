import React, { useContext, useEffect, useReducer } from "react";
import reducer from './Reducer' 

const Appcontext=React.createContext();
const API="https://picsum.photos/200/300";
const initalState={
    name:"",
    image:"",
    services:[],
};

const Appprovider =({children})=>{
    const [state,dispatch]=useReducer(reducer,initalState);

    const updateHomepage=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name: "Apoorva karn",
                image:"./images/hero.svg",
            },
        })
    };

    const updateAboutpage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name: "this is me Apoorva Karn",
                image:"./images/about1.svg",
            },
        })
    };
const getservices=async(url)=>{
    try{
        const res=await fetch(url);
        const data=await res.json();
        dispatch({type:"GET_SERVICES",payload:data})
    }catch(error){
        console.log(error);
    }
};

    // call the api
useEffect(()=>{
    getservices(API);
},[]);



    return <Appcontext.Provider value={{...state,updateHomepage,updateAboutpage}}>{children}</Appcontext.Provider>
};
// global custom hooks
const useglobalcontext=()=>{
    return useContext(Appcontext);
}

export {Appcontext,Appprovider,useglobalcontext};