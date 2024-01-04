import "./wrapper.css"

export const MaxWidthWrapper = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}