import React from 'react';

function Phone(props) {
    // const {}=props
    return (
        <li className="thumbnail"
            data-element="phone-element"
            data-phone-id={props.id}
        >
            <a
                href="#!/phones/motorola-xoom-with-wi-fi"
                className="thumb"
                data-element="details-link"
            >
                <img
                    alt={props.name}
                    src={require(`../${props.imageUrl}`)}
                    style={{ maxWidth: "100%" }}
                />
            </a>
            <div className="phones__btn-buy-wrapper">
                <button
                    className="btn btn-success"
                    data-element="add-to-cart"
                >   Add
                </button>
            </div>
            <a
                href="#!/phones/motorola-xoom-with-wi-fi"
                data-element="details-link"
            >{props.name}</a>
            <p>{props.snippet}</p>
        </li>
    )
}

export default Phone