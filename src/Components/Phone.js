import React from 'react';

function Phone(props) {
    // const {}=props
    return (
        <li className="thumbnail"

        >

            <img
                alt={props.name}
                src={props.imageUrl} />

            <a
                href="#!/phones/motorola-xoom-with-wi-fi"
                data-element="details-link"
            >{props.name}</a>
            <p>{props.imageUrl}</p>
        </li>
    )

}

export default Phone