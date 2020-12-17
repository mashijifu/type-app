import React,{FC} from 'react'

type ButtonProps = {
    text: string,
    color: string,
    setColor: string,
}

const Button: FC<ButtonProps> = ({ color, setColor}) => {
    return (
        <div>
            <button
                style={{backgroundColor: color}}
                onClick={() => setColor(color)}
            >
                {text}
            </button>
        </div>
    )

}

export default Button
