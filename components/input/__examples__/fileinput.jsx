import React from 'react';
import createReactClass from 'create-react-class';
import IconSettings from '~/components/icon-settings';
import Input from '~/components/input'; // `~` is replaced with design-system-react at runtime

const Example = createReactClass({
	displayName: 'BaseInputExample',

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<section className="slds-grid slds-grid_pull-padded slds-grid_vertical-align-center">
					<div className="slds-col_padded">
						<h1 className="slds-text-title_caps slds-p-vertical_medium">
							File Input
						</h1>
						<Input
							id="base-id"
							label="My Label"
							type="file"
						/>
					</div>
				</section>
			</IconSettings>
		);
	},
});

export default Example; // export is replaced with `ReactDOM.render(<Example />, mountNode);` at runtime
