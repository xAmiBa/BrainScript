const PrimaryButton = ({text, onClick, disabled=false, style=null}) => {

    return (
        <button
            className="primary-button"
            onClick={onClick}
            disabled={disabled}
            style={style}
        >
            {text}
        </button>
    )
}

export default PrimaryButton