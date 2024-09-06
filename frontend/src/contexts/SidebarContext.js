import React, {createContext, useState, useContext, useReducer} from "react";
import PropTypes from 'prop-types';


//CHECK IF THE SIDEBAR IS OPEN OR NOT
const initialState={
    isOpen:false
}

//it takes the state and checks the action type which is toggling my sidebar and then returns the newly updated state...
const sidebarReducer = (state, action) => {
    if(action.type === "TOGGLE_SIDEBAR"){
        return { ...state, isSidebarOpen: !state.isSidebarOpen}
    }
    throw new Error(`No matching "${action.type} action type`);
}

//we create a context, so that we can share it across different components...
export const SidebarContext=createContext({})

        
//creating provider, cuz we need a wrapper that provides the state and the functions to the components...
export const SidebarProvider=({children})=>{

    //state holds the current state and dispatch is used to send actions to the reducer that handles these actions and update the state

    const [state,dispatch]= useReducer(sidebarReducer, initialState);
    const toggleSidebar =()=>{
        dispatch({type:"TOGGLE_SIDEBAR "})
    }

    return (
        <SidebarContext.Provider value={
            {...state,
            toggleSidebar    
            } }>
                {children}
            </SidebarContext.Provider>
    )
}


SidebarProvider.propTypes = {
    children: PropTypes.node
}