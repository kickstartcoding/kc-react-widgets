import React, { Component } from 'react';
import './Dropdown.css';

function Dropdown (props) {
  // Build button classes based on props
  const {style, type, shape, size, depth, visible, direction} = props;
  const classNames = ['kc-Dropdown'];
  classNames.push(`kc-Dropdown--${type || 'default'}`);
  classNames.push(`kc-Dropdown--${size || 'medium'}`);
  classNames.push(`kc-Dropdown--${depth || 'medium'}Depth`);
  classNames.push(`kc-Dropdown--${shape || 'square'}`);

  const outerCN = ['kc-Dropdown-outerWrapper'];
  outerCN.push(`kc-Dropdown--${shape || 'square'}`);

  //const {display} = style;
  if (visible === false) {
    //classNames.push('kc-Dropdown--hidden');
    outerCN.push('kc-Dropdown--hidden');
  } else {
    //classNames.push('kc-Dropdown--visible');
    outerCN.push('kc-Dropdown--visible');
  }

  const placementCN = ['kc-Dropdown-placementWrapper'];
  if (direction === "right") {
    placementCN.push('kc-Dropdown--rightward');
  } else {
    placementCN.push('kc-Dropdown--downward');
  }

  return (
    <div className={placementCN.join(' ')}>
      <div className={outerCN.join(' ')}>
        <div style={style} className={classNames.join(' ')}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
