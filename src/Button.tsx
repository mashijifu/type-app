import React,{FC} from 'react'

type ButtonProps = {
    num: number,
    text: string,
    color: string,
}

const Button: FC<ButtonProps> = ({ num, text, color}) => {
    return (
        <div>
            <button style={backgrondColor}></button>
        </div>
    )

}

export default Button
