import React from 'react';


class PhonesViewer extends React.Component {
    // constructor() {
    //   super();

    //   this.state = {
    //   };
    // }
    render() {
        const { isShown } = this.props;
        if (isShown) {
            return (
                <div>

                    PhonesViewer
                </div>
            );
        } else return null
    }
}

export default PhonesViewer