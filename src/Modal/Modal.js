import React from 'react';
import './Modal.css';

function Modal (props) {
  // Build button classes based on props
  const {style, type, shape, size, depth, visible, direction} = props;
  const classNames = ['kc-Modal'];
  classNames.push(`kc-Modal--${type || 'default'}`);
  classNames.push(`kc-Modal--${size || 'medium'}`);
  classNames.push(`kc-Modal--${depth || 'medium'}Depth`);
  classNames.push(`kc-Modal--${shape || 'square'}`);

  const outerCN = ['kc-Modal-outerWrapper'];
  outerCN.push(`kc-Modal--${shape || 'square'}`);

  const placementCN = ['kc-Modal-placementWrapper'];
  if (visible === false) {
    //classNames.push('kc-Modal--hidden');
    placementCN.push('kc-Modal--hidden');
  } else {
    //classNames.push('kc-Modal--visible');
    placementCN.push('kc-Modal--visible');
  }

  const innerPlacementCN = ['kc-Modal-innerPlacementWrapper'];
  innerPlacementCN.push(`kc-Modal--${size || 'medium'}`);

  return (
    <div className={placementCN.join(' ')}>
      <div className={innerPlacementCN.join(' ')}>
        {
          /* Conditionally include backdrop */
          (props.onBackdropClick || props.showBackdrop) ? (
            <div className="kc-Modal-backdrop" onClick={props.onBackdropClick} />
          ) : null
        }
        <div className={outerCN.join(' ')}>
          {
            props.bareChildren ? (
              <div className="kc-Modal-bareContainer">
                {props.children}
              </div>
            ) : (
              <div style={style} className={classNames.join(' ')}>
                {props.children}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Modal;
