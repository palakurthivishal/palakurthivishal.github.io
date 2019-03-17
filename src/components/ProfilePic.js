import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 3px;
    background: #CCC;
`

const imgStyles={
    height: '100px',
    width: '100px'
}

class ProfilePic extends React.Component {
    render(){
        return <Wrapper><img style={imgStyles} src={this.props.profileImg}/></Wrapper>;
    }
}


const mapStateToProps = state => {
    return {
        profileImg: state.profileData && state.profileData.personal.img
    }
}


export default connect(mapStateToProps, undefined)(ProfilePic)
