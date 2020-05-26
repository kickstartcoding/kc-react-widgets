import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  state = {
    continuedPress: false,
  }

  onClick(event) {
    const {onChange, onClick, value, quickPress, pressSpeed} = this.props;

    if (!quickPress && value === undefined) {
      const timeMs = pressSpeed || 150;
      this.setState({continuedPress: true});
      clearTimeout(this._lastTimeout);
      this._lastTimeout = setTimeout(() => {
        this.setState({
          continuedPress: false,
        });
      }, timeMs);
    }


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
    const cls = 'kc-Button-icon ' + (isRight ? 'kc-Button-icon--right' : '');
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

    if (
        (value === false || value === true) &&
        (iconEmoji === undefined && iconEmojiRight === undefined)
      ) {
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
      <div className="kc-Button-contentsWrapper">
        {imgLeft}
        <div className="kc-Button-childrenWrapper">
          {this.props.children}
        </div>
        {imgRight}
      </div>
    );
  }

  render() {
    // Build button classes based on props
    const {style, type, shape, size, depth, value} = this.props;
    let classNames = ['kc-Button'];

    classNames.push(`kc-Button--${type || 'default'}`);
    classNames.push(`kc-Button--${size || 'medium'}`);
    classNames.push(`kc-Button--${depth || 'medium'}Depth`);
    classNames.push(`kc-Button--${shape || 'square'}`);

    if (value === true || this.state.continuedPress) {
      classNames.push('kc-Button--depressed');
    }

    return (
      <div style={style} className={classNames.join(' ')} onClick={this.onClick.bind(this)}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Button;
