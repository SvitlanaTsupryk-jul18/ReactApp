import React from 'react';


class PhonesViewer extends React.Component {
    constructor() {
        super();

        this.state = {
        };
    }
    render() {
        const { isShown, phone } = this.props;
        if (isShown) {
            return (
                <div>

                    PhonesViewer
                    {console.log(phone)}
                </div>
            );
        } else return null
    }
}

export default PhonesViewer