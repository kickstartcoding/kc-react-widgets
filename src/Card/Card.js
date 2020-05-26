import React from 'react';
import './Card.css';

function Card (props) {
  // Build button classes based on props
  const {style, type, shape, size, depth, inset} = props;
  let classNames = ['kc-Card'];

  classNames.push(`kc-Card--${type || 'default'}`);
  classNames.push(`kc-Card--${size || 'medium'}`);
  classNames.push(`kc-Card--${depth || 'medium'}Depth`);
  classNames.push(`kc-Card--${shape || 'square'}`);

  if (inset) {
    classNames.push('kc-Card--inset');
  }

  return (
    <div style={style} className={classNames.join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;
