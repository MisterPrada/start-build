/**
 * WordPress dependencies
 */
import { Path, SVG } from '@wordpress/primitives'
import {
	__experimentalInputControl as InputControl,
	TextareaControl,
	Panel,
	PanelBody,
	PanelRow
} from '@wordpress/components'
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { more } from '@wordpress/icons'
import { __ } from '@wordpress/i18n'

// Types
import { TAttributes } from '../'

const THEME_TEXT_DOMAIN = 'react-wordpress'

type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}

const ButtonEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const {

	} = attributes
    const blockProps = useBlockProps()

    blockProps.className += ''

    return (
        <>
            <InspectorControls key="setting">
				<PanelBody
					title={ __( 'Button', THEME_TEXT_DOMAIN ) }
					icon={ more }
					initialOpen={ true }
				>

				</PanelBody>
            </InspectorControls>

			<a
				className="button button--fill"
				href="#"
				target="__blank"
			>
				<span className="button__text">
					Button
				</span>
			</a>
        </>
    )
}

export default ButtonEdit
