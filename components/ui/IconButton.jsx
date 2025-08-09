import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({
  children,
  variant = 'contained',
  size = 'md',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  // Base classes that you can style
  const baseClasses = 'button icon-button';
  const variantClass = `icon-button--${variant}`;
  const sizeClass = `icon-button--${size}`;
  const disabledClass = disabled ? 'icon-button--disabled' : '';

  const buttonClasses = [
    baseClasses,
    variantClass,
    sizeClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['outlined', 'contained', 'text']),
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default IconButton;
