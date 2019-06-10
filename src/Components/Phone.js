import React from 'react';

function Phone(props) {
    const { id, name, imageUrl, snippet, onClickDetails } = props
    return (
        <li className="thumbnail"
            data-element="phone-element"
            data-phone-id={id}
        >
            <a
                href="#!/phones/motorola-xoom-with-wi-fi"
                className="thumb"
                data-element="details-link"
                onClick={() => onClickDetails(id)}
            >
                <img
                    alt={name}
                    src={require(`../${imageUrl}`)}
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
                onClick={() => onClickDetails(id)}
            >{name}</a>
            <p>{snippet}</p>
        </li>
    )
}

export default Phone