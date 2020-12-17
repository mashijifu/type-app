import React,{FC} from 'react'

type ButtonProps = {
    text: string,
    color: string,
}

const Button: FC<ButtonProps> = ({ text, color}) => {
    return (
        <div>
            <button style={{backgroundColor: color}}>{text}</button>
        </div>
    )

}

export default Button
