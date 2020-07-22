import React from 'react'
import classes from './Overlay.module.css'

const overlay = (props) => <div style={{opacity: props.show ? 1 : 0}} className={classes.Overlay}></div>

export default overlay