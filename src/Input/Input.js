import React from 'react';
import './Input.css';

function Input (props) {
  // Build button classes based on props
  const {borderType, shape, size, depth, raised, flat} = props;
  let classNames = ['kc-Input'];

  classNames.push(`kc-Input--${borderType || 'default'}`);
  classNames.push(`kc-Input--${size || 'medium'}`);
  classNames.push(`kc-Input--${depth || 'medium'}Depth`);
  classNames.push(`kc-Input--${shape || 'square'}`);

  if (raised) {
    classNames.push('kc-Input--outset');
  } else if (flat) {
    classNames.push('kc-Input--flat');
  } else {
    classNames.push('kc-Input--inset');
  }

  return (
    <input
      className={classNames.join(' ')}
      {...props}
    />
  );
}

export default Input;
