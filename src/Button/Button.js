import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  onClick(event) {
    const {onChange, onClick, value} = this.props;

    if (onChange) {
      event.target.value = !value;
      onChange(event);
    } else if (onClick) {
      onClick(event);
    } else {
      console.error('Clicked on Kickstart Button without event.');
    }
  }

  _makeIcon(content, isSpan = false, isRight = false) {
    const cls = 'Button-icon ' + (isRight ? 'Button-icon--right' : '');
    if (isSpan) {
      return (
        <span className={cls} role="img" aria-label="Icon">
          {content}
        </span>
      );
    } else {
      return (
        <img className={cls} src={content} />
      );
    }
  }

  renderContent() {
    let {iconEmoji} = this.props;
    const {value, icon, iconRight, iconEmojiRight} = this.props;

    if (value === false || value === true && iconEmoji === undefined) {
      iconEmoji = value ? '☑' : '☐';
    }

    if (!icon && !iconRight && !iconEmoji && !iconEmojiRight) {
      return this.props.children;
    }

    let imgLeft = null;
    let imgRight = null;

    if (icon) {
      imgLeft = this._makeIcon(icon);
    }

    if (iconRight) {
      imgRight = this._makeIcon(iconRight, false, true);
    }

    if (iconEmoji) {
      imgLeft = this._makeIcon(iconEmoji, true);
    }

    if (iconEmojiRight) {
      imgRight = this._makeIcon(iconEmojiRight, true, true);
    }

    return (
      <div className="Button-contentsWrapper">
        {imgLeft}
        <div className="Button-childrenWrapper">
          {this.props.children}
        </div>
        {imgRight}
      </div>
    );
  }

  render() {
    const {style, type, shape, size, depth, value} = this.props;
    let classNames = ['Button'];

    classNames.push(`Button--${type || 'default'}`);
    classNames.push(`Button--${size || 'medium'}`);
    classNames.push(`Button--${depth || 'medium'}Depth`);
    classNames.push(`Button--${shape || 'square'}`);

    if (value === true) {
      classNames.push('Button--depressed');
    }

    return (
      <div style={style} className={classNames.join(' ')} onClick={this.onClick.bind(this)}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Button;
