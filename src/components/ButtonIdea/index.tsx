import React from 'react';
import { IconType } from '../../assets/icon';

import './styles.css';

interface BtnIdea {
  Image?: React.FC<IconType>;
  onClick?: () => void;
}

const ButtonIdea: React.FC<BtnIdea> = ({ Image, onClick }) => {
  return (
    <button onClick={onClick}>
      {Image ? (
        <React.Fragment>
          <span>Open in IDEA</span>
          <Image size={18} />
        </React.Fragment>
      ) : (
        <p>No image content</p>
      )}
    </button>
  );
}

export default ButtonIdea;