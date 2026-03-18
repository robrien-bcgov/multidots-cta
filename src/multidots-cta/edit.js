/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const onChangeContent = ( val ) => {
		setAttributes( { content: val } );
	};

	return (
		<>
		<BlockControls>
		<ToolbarGroup>
			<ToolbarButton
			title="Settings"
			icon="admin-tools"
			isActive={ true }
			onClick={ () => console.log("Settings button was clicked") }
			/>
		</ToolbarGroup>
		</BlockControls>

			<RichText
				{ ...useBlockProps() }
				tagName="div"
				onChange={ onChangeContent }
				value={ attributes.content }
				placeholder="Enter your text here..."
			/>
		</>
	);
}
