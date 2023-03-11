/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import ButtonEdit from './components/edit'
import ButtonSave from './components/save'

/**
 * Styles
 */
import './styles/edit.scss'
import './styles/style.scss'

// @ts-ignore Data
import metadata from './block.json'


export type TAttributes = {

}


registerBlockType( metadata.name, {
    attributes: {
		type: {
			enum: [ 'link', 'popup', 'video' ]
		},
		link: {
			type: 'string'
		},
		target: {
			type: 'string'
		},

		value: {
			type: 'string'
		}
    },

    example: {},

    edit: ButtonEdit,

    save: ButtonSave
} )
