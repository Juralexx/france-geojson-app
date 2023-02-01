import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SemiCicle from "../loaders/SemiCicle";

const buttonProps = (props) => {
    return ({
        type: props.type,
        style: props.style,
        onClick: props.onClick,
        onKeyDown: props.onKeyDown,
        disabled: props.disabled,
    })
}

export const Button = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn btn_first " + className : "btn btn_first"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

export const OutlinedButton = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn outlined_btn " + className : "btn outlined_btn"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

export const TextButton = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn text_btn " + className : "btn text_btn"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

export const StringButton = (props) => {
    const { children, className } = props
    return (
        <Btn className={`${className ? "btn string_btn " + className : "btn string_btn"}`}
            {...buttonProps(props)}
        >
            {children}
        </Btn>
    )
}

export const LoadingButton = (props) => {
    const { children, onClick, className, loadingText, loadingDelay, loadingConditions, isLoading } = props
    const [loading, setLoading] = useState(isLoading || false)

    const delay = loadingDelay || 1500

    const onButtonClick = () => {
        if (onClick) {
            if (!loadingConditions) {
                return
            } else {
                setLoading(true)
                const timer = setTimeout(() => {
                    onClick()
                }, delay)
                return () => clearTimeout(timer)
            }
        }
    }

    useEffect(() => {
        if (!loadingConditions)
            setLoading(false)
        else setLoading(true)
    }, [loadingConditions])

    return (
        <Btn className={`${className ? "btn btn_first " + className : "btn btn_first"}`}
            {...buttonProps(props)}
            onClick={onButtonClick}
        >
            {loading &&
                <>
                    <SemiCicle />
                    {loadingText ? loadingText : 'Chargement...'}
                </>
            }
            {!loading && children}
        </Btn>
    )
}

const Btn = styled.button`
    position        : relative;
    height          : 36px;
    min-width       : 120px;
    display         : flex;
    align-items     : center;
    justify-content : center;
    padding         : 0 20px;
    font-size       : 14px;
    text-align      : center;
    text-decoration : none;
    text-transform  : none;
    border          : none;
    outline         : none;
    cursor          : pointer;
    white-space     : nowrap;
    overflow        : hidden;
    transform       : scale(1);

    &:disabled {
        opacity : 0.5;

        &:hover {
            background : var(--primary);
        }
    }

    &:active {
        transform  : scale(0.95);
    }

    &.delete {
        background-color:  rgba(var(--red-rgb), 0.9);
        &:hover {
            background-color: var(--red);
        }
    }

    &.validate {
        background-color:  rgba(var(--green-rgb), 0.9);
        &:hover {
            background-color: var(--green);
        }
    }

    &.btn_icon_start {
        svg {
            height       : 18px;
            width        : 18px;
            margin-right : 8px;
        }
    }
    &.btn_icon_end {
        svg {
            height      : 18px;
            width       : 18px;
            margin-left : 8px;
        }
    }

    a {
        display         : flex;
        align-items     : center;
        justify-content : center;
        left            : 0;
        top             : 0;
        width           : 100%;
        height          : 100%;
        color           : white;
    }

    &.btn_first {
        color         : white;
        background    : var(--primary);
        border-radius : var(--rounded-sm);
        box-shadow    : var(--shadow-tiny);

        svg {
            height : 18px;
            width  : 18px;
            color  : white;
        }

        &:hover {
            background : var(--primary-dark);
        }

        .circle-loader {
            margin : 0 5px 0 0;
            width  : 40px;
            .path {
                stroke       : white;
                stroke-width : 6px;
            }
        }
    }

    &.outlined_btn {
        border        : 1px solid var(--primary);
        color         : var(--primary);
        border-radius : var(--rounded-sm);

        &:hover {
            background : rgba(var(--primary-rgb), 0.10);
        }
    }

    &.text_btn {
        color         : var(--primary);
        border-radius : var(--rounded-sm);
        box-shadow    : none;
        background    : rgba(var(--primary-rgb), 0.15);

        &:hover {
            background : rgba(var(--primary-rgb), 0.22);
        }
        a {
            color      : var(--primary);
            background : none;
            padding    : 0;
            height     : unset;
        }
        svg {
            color : var(--primary);
        }
    }

    &.string_btn {
        color      : var(--primary);
        box-shadow : none;
        padding    : 0;
        height     : auto;
        min-width  : unset;

        &:active {
            transform  : none;
            box-shadow : none;
        }
        &:hover,
        &:active {
            &:before {
                content    : '';
                position   : absolute;
                left       : 0;
                bottom     : 0;
                width      : 100%;
                height     : 1px;
                background : var(--primary);
            }
        }
        a {
            color      : var(--primary);
            background : none;
            padding    : 0;
            height     : unset;
        }
    }
`

/**
 * 
 */

export const IconToggle = (props) => {
    const { icon, onClick, className } = props
    return (
        <ToggleIcon onClick={onClick} className={`${className ? "icon_toggle " + className : "icon_toggle"}`}>
            {icon}
        </ToggleIcon>
    )
}

const ToggleIcon = styled.button`
    display          : flex;
    align-items      : center;
    justify-content  : center;
    width            : 34px;
    height           : 34px;
    border-radius    : var(--rounded-md);
    cursor           : pointer;
    transform        : scale(1);
    background-color : var(--x-light);

    svg {
        width  : 20px;
        height : 20px;
    }

    &:active {
        transform  : scale(0.95);
    }
    &.light {
        background-color : var(--xx-light);
    }
`

/**
 * 
 */

export const ToolsBtn = (props) => {
    const { className } = props
    return (
        <ToolsButton className={`${className ? "tools_btn " + className : "tools_btn"}`}
            {...buttonProps(props)}
        >
            {props.children}
        </ToolsButton>
    )
}

const ToolsButton = styled.button`
    display          : flex;
    align-items      : center;
    justify-content  : center;
    height           : 32px;
    width            : 32px;
    background-color : var(--content-light);
    border-radius    : var(--rounded-md);
    transform        : scale(1);
    cursor           : pointer;

    &:hover,
    &.active {
        background-color : rgba(var(--primary-rgb), 0.06);
        svg {
            color : var(--primary);
        }
    }

    svg {
        height : 20px;
        width  : 20px;
    }

    &:disabled {
        opacity : 0.5;
    }

    &:active {
        transform  : scale(0.95);
    }
`

/**
 * 
 */

export const SmallToolsBtn = (props) => {
    const { onClick, className } = props
    return (
        <ToolsButtonSmall className={`${className ? "small_tools_btn " + className : "small_tools_btn"}`} onClick={onClick}>
            {props.children}
        </ToolsButtonSmall>
    )
}

const ToolsButtonSmall = styled.button`
    display          : flex;
    align-items      : center;
    justify-content  : center;
    padding          : 8px;
    cursor           : pointer;
    border-radius    : var(--rounded-sm);
    color            : var(--text);
    transform        : scale(1);
    background-color : var(--primary);
    background       : var(--content-x-light);
    box-shadow       : var(--shadow-xl);

    svg {
        height : 12px;
        width  : 12px;
    }

    &:active {
        transform  : scale(0.95);
    }
`