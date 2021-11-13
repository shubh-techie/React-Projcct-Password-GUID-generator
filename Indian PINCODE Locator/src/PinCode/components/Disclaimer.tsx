import * as React from "react";

export interface IDisclaimerProps {
}

export interface IDisclaimerState {
}

export default class Disclaimer extends React.Component<IDisclaimerProps, IDisclaimerState> {
    constructor(props: any, state: any) {
        super(props, state);
    }
    render() {
        return (
            <div>
                <h1>this is Disclaimer Component</h1>
            </div>
        );
    }
}
