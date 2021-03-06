import React from 'react';
import Phone from './Phone'

class PhonesCatalog extends React.Component {
    constructor() {
        super();

        this.state = {
            phones: []
            // isShown: this.props.isShown
        };
        this.getPhones = this.getPhones.bind(this);
    }
    componentDidMount() {
        this.getPhones();
    }
    async getPhones() {
        const API_URL = 'https://mate-academy.github.io/phone-catalogue-static/api';
        const response = await window.fetch(API_URL + '/phones.json');
        let phones = await response.json();
        this.setState({ phones });
    }
    render() {
        const { isShown, onPhoneClicked } = this.props;
        const phonesArr = this.state.phones.map(phone =>
            <Phone id={phone.id} key={phone.age} name={phone.name} imageUrl={phone.imageUrl} snippet={phone.snippet} onClickDetails={(id) => {
                onPhoneClicked(id);
            }} />
        )
        if (isShown) {
            // if (this.state.isShown){
            return (
                <div>
                    <h2>PhonesCatalog</h2>
                    <ul className="phones">
                        {phonesArr}
                    </ul>
                </div>
            );
        } else return null
    }
}

export default PhonesCatalog