import * as React from 'react';
import { Dialog, DialogType } from 'office-ui-fabric-react/lib/Dialog';
import { getId } from 'office-ui-fabric-react/lib/Utilities';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import GuidGeneratorHelper from '../../../Services/GuidGeneratorHelper';
import { MessageBar } from 'office-ui-fabric-react';
import { Alert } from 'react-bootstrap';


interface IDialogBasicProps {
    hideDialog: any;
    closeDialog: any;
    guidVersion: number;
}

interface IDialogBasicState {
    isDraggable: boolean;
}

export default class DialogBasic extends React.Component<IDialogBasicProps, IDialogBasicState> {
    private guidGeneratorHelper: GuidGeneratorHelper;

    constructor(props: any, context: any) {
        super(props, context)
        this.guidGeneratorHelper = new GuidGeneratorHelper();

        this.state = {
            isDraggable: true
        }

    }
    private _labelId: string = getId('dialogLabel');
    private _subTextId: string = getId('subTextLabel');
    private _dragOptions = {
        moveMenuItemText: 'Move',
        closeMenuItemText: 'Close',
        menu: ContextualMenu
    };

    render() {
        let guidTitle = this.guidGeneratorHelper.getGUIDInfoByVersion(this.props.guidVersion);
        const DefaultMessage = () => (
            <Alert variant='light'>
                <MessageBar>
                    {guidTitle[1]}
                </MessageBar>
            </Alert>
        );
        return (
            <div>
                <Dialog
                    hidden={this.props.hideDialog}
                    onDismiss={this._closeDialog}
                    dialogContentProps={{
                        type: DialogType.normal,
                        title: guidTitle[0],
                    }}
                    modalProps={{
                        titleAriaId: this._labelId,
                        subtitleAriaId: this._subTextId,
                        isBlocking: false,
                        styles: { main: { maxWidth: 450 } },
                        dragOptions: this.state.isDraggable ? this._dragOptions : undefined
                    }}
                >
                    <DefaultMessage />
                </Dialog>
            </div >
        )
    }
    private _closeDialog = (): void => {
        this.props.closeDialog(true);
    };
}
