import React from 'react'
import styled from 'styled-components';
import Icon from '../tools/icons/Icon'

const inputProps = (props) => {
    return ({
        className: props.inputClassName,
        type: props.type,
        id: props.id,
        name: props.name,
        placeholder: props.placeholder,
        defaultValue: props.defaultValue,
        value: props.value,
        onChange: props.onChange,
        onInput: props.onInput,
        onClick: props.onClick,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onKeyUp: props.onKeyUp,
        onKeyDown: props.onKeyDown,
        onKeyPress: props.onKeyPress,
        readOnly: props.readOnly,
        disabled: props.disabled,
        min: props.min,
        max: props.max
    })
}

export const ClassicInput = (props) => {
    const { useRef, value, defaultValue, className, cross, onClean } = props
    return (
        <InputClassic className={`${className ? 'classic-input ' + className : 'classic-input'}`}>
            <input
                ref={useRef}
                {...inputProps(props)}
            />
            {cross &&
                ((value || defaultValue) &&
                    (value?.length > 0 || defaultValue?.length > 0)) && (
                    <div onClick={onClean} className="svg_container">
                        <Icon name="Cross" className="cross" />
                    </div>
                )}
        </InputClassic>
    )
}

const InputClassic = styled.div`
    position    : relative;
    display     : flex;
    align-items : center;
    flex-grow   : 1;
    z-index     : 10;

    input {
        display       : block;
        height        : 44px;
        padding       : 8px 12px;
        color         : var(--input-text);
        background    : var(--input);
        border-radius : var(--rounded-sm);
        flex-grow     : 1;
        font-size     : 15px;
        outline       : none;
        border        : none;
        z-index       : 10;

        &::placeholder {
            color : var(--placeholder);
        }
    }

    .svg_container {
        position      : absolute;
        bottom        : 10px;
        right         : 10px;
        padding       : 5px;
        border-radius : 20px;
        cursor        : pointer;
        z-index       : 700;

        svg {
            height   : 16px;
            width    : 16px;
            color    : var(--text-tertiary);
        }

        &:hover {
            background : var(--content-light);
        }
    }
`