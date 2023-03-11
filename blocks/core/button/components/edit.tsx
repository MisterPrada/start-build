/**
 * WordPress dependencies
 */
import { Button, ButtonGroup, PanelBody } from '@wordpress/components'
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks
} from '@wordpress/block-editor'
import { Path, SVG } from '@wordpress/primitives'
import { more } from '@wordpress/icons'
import { __ } from '@wordpress/i18n'

/**
 * Types
 */
import { EType, TAttributes } from '../'
import { useState } from "@wordpress/element";

const THEME_TEXT_DOMAIN = 'react-wordpress'


const LinkButton = ( props: any ) => {
	return (
		<>
			<a
				className="button button--fill"
				href="#"
				target="__blank"
			>
				<span className="button__text">
					Link
				</span>
			</a>
		</>
	)
}


const Popup = ( props: any ) => {
	const { onRequestClose, children } = props

	return (
		<>
			<div className="editor-popup">
				<div
					id="modal-safety-priority-"
					className="modal fade modal-safety-priority show editor-popup__modal"
					tabIndex={-1}
					role="dialog"
					aria-hidden="true"
				>
					<div className="modal-dialog modal-dialog-centered modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="modal-close"
									data-bs-dismiss="modal"
									aria-label={ __( 'Close popup', THEME_TEXT_DOMAIN ) }
									onClick={ onRequestClose }
								>
									<SVG width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<Path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										<Path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</SVG>

								</button>
							</div>

							<div className="modal-body">
								<div className="modal-safety-priority__body-wrap decor-line decor-line--section">
									<div className="modal-safety-priority__simple-content">
										<div className="text-content">
											{ children }
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const PopupButton = ( props: any ) => {
	const [isOpen, setOpen] = useState<boolean>( false )
	const blockProps = useBlockProps()
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		renderAppender: InnerBlocks.ButtonBlockAppender
	} )

	const openModal = () => setOpen( true )
	const closeModal = () => setOpen( false )

	return (
		<>
			<button
				className="button button--fill"
				onClick={ openModal }
			>
				<span className="button__text">
					Popup
				</span>
			</button>

			{ isOpen && (
				<Popup
					onRequestClose={ closeModal }
				>
					<div { ...innerBlocksProps } />
				</Popup>
			) }
		</>
	)
}


const VideoButton = ( props: any ) => {
	return (
		<>
			<a
				className="button button--fill"
				href="#"
				target="__blank"
			>
				<span className="button__text">
					Video
				</span>
			</a>
		</>
	)
}

type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}

const ButtonEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const {
		type,
		value,
		link,
		target,
		popupId,
		videoType,
		videoFile,
		videoPoster,
		videoLink
	} = attributes
    const blockProps = useBlockProps()

    blockProps.className += ''

	const setType = ( newType: EType ) => {
    	setAttributes( { type: newType } )
	}

    return (
        <>
            <InspectorControls key="setting">
				<PanelBody
					title={ __( 'Button', THEME_TEXT_DOMAIN ) }
					icon={ more }
					initialOpen={ true }
				>
					<fieldset>
						<legend className="blocks-base-control__label">
							{ __( 'Type', THEME_TEXT_DOMAIN ) }
						</legend>

						<ButtonGroup>
							<Button
								variant={ type === EType.Link ? 'primary' : 'secondary' }
								onClick={ () => setType( EType.Link ) }
							>
								{ __( 'Link', THEME_TEXT_DOMAIN ) }
							</Button>

							<Button
								variant={ type === EType.Popup ? 'primary' : 'secondary' }
								onClick={ () => setType( EType.Popup ) }
							>
								{ __( 'Popup', THEME_TEXT_DOMAIN ) }
							</Button>

							<Button
								variant={ type === EType.Video ? 'primary' : 'secondary' }
								onClick={ () => setType( EType.Video ) }
							>
								{ __( 'Video', THEME_TEXT_DOMAIN ) }
							</Button>
						</ButtonGroup>
					</fieldset>
				</PanelBody>
            </InspectorControls>

			{ type === EType.Link ? <LinkButton/> : null }
			{ type === EType.Popup ? <PopupButton/> : null }
			{ type === EType.Video ? <VideoButton/> : null }
        </>
    )
}

export default ButtonEdit
