"use client";

import { CustomeButtonProps } from '@/types';
import React from 'react'

function ButtonComponent({title,handleClick,containerstyle, btnType} : CustomeButtonProps) {
  return (
    <button
    disabled={false}
    type={ btnType ||'button'}
    onClick={handleClick}
    className={containerstyle}
    >
      <span>
        {title}
      </span>

    </button>
  )
}

export default ButtonComponent
