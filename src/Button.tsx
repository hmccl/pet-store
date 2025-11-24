function Button({ lang, handleClick }: any) {
    return (
        <div>
            <button onClick={handleClick}>
                Wikipedia {lang}
            </button>
        </div>
    )
}

export default Button
