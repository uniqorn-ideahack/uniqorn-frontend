import React, {Component} from 'react';
import "./Home.css";
import MainLayout from "../components/layout/MainLayout";
import Logo from "../Logo";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: JSON.parse(localStorage.getItem('user')),
        }
    }

    render() {
        return (
            <MainLayout>
                {(this.state.user) ?
                    <main>
                        <h1>Hello {this.state.user.user.name}!</h1>
                        <h3>Your journey to lose weight: Day 7 of 30</h3>
                        <progress max="100" value="40"></progress>
                        <h2>Next step</h2>
                    </main>
                    :
                    <main>
                        <Logo width={250} height={250}/>
                        <h1>Better you.</h1>
                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
                            qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                    </main>
                }

            </MainLayout>
        )
    }
}
