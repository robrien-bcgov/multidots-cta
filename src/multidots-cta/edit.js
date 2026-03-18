/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	RichText,
	InnerBlocks,
	BlockControls,
	InspectorControls,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, PanelBody } from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ["core/heading","core/button", "core/paragraph", "core/image"];

const CTA_TEMPLATE = [
['core/columns', {}, [
['core/column', {},
[
['core/heading', { level: 2, placeholder: 'Heading...' }],
['core/paragraph', { placeholder: 'Paragraph...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum arcu non lectus tristique dictum. Aenean ultrices justo leo, eu accumsan est malesuada vitae. Integer sed ex nibh.' }],
['core/button', { url: '#', placeholder: 'CTA Button' }],
]
],
['core/column', {}, [
['core/image', {}],
]
],]
]
];

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						title="Settings"
						icon="admin-settings"
						onClick={() => console.log("Settings button was clicked")}
					/>
					<ToolbarButton
						title="Tools"
						icon="admin-tools"
						onClick={() => console.log("Tools button was clicked")}
					/>
				</ToolbarGroup>
				<ToolbarGroup>
					<ToolbarButton
						title="Links"
						icon="admin-links"
						onClick={() => console.log("Links button was clicked")}
					/>
				</ToolbarGroup>
			</BlockControls>
			<InspectorControls>
				<PanelBody title="Custom Settings" icon="admin-appearance" initialOpen>
					<p>Placeholder text</p>
				</PanelBody>
			</InspectorControls>
			{/* This acts as a container for the inner blocks, allowing users to add and edit them within this block. */}

			<div {...blockProps}>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={CTA_TEMPLATE}
					templateLock="all"
				/>
			</div>
		</>
	);
}
