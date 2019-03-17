import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer';

export default function RootContainer(){
    return (
        <div className="row">
            <div className="col-sm-3">
                <SideBar />
            </div>
            <div className="col-sm-9">
                <MainContainer/>
            </div>
        </div>
    );
}