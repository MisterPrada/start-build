// Libs
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

// Components
import SectionBackground, { BackgroundFields, backgroundType } from '../../../../resources/js/template-parts/section-background'

// @ts-ignore Assets
import LongArrow from '../../../../dist/images/icons/icon-long-arrow.svg'

// Types
import { UploadImage, UploadVideo } from '../../../../resources/types/types'
import { TAttributes } from '../'


type TProps = {
    attributes: TAttributes,
    setAttributes: ( {} ) => any
}


const IntroEdit = ( props: TProps ) => {
    const { attributes, setAttributes } = props
    const {
		backgroundType: bgType,
		backgroundImage,
		backgroundImageAlt,
		backgroundVideo,
		posterImage,
		kicker,
		title,
		subtitle,
		description
	} = attributes
    const blockProps = useBlockProps()

    blockProps.className += ' section section-hero'

    const THEME_TEXT_DOMAIN = 'react-wordpress'

	const setKicker = ( value: string ) => {
		setAttributes( { kicker: value } )
	}

    const setTitle = ( value: string ) => {
        setAttributes( { title: value } )
    }

	const setSubtitle = ( value: string ) => {
		setAttributes( { subtitle: value } )
	}

	const setDescription = ( value: string ) => {
		setAttributes( { description: value } )
	}

    const setType = ( type: backgroundType ) => {
        setAttributes( { backgroundType: type } )
    }

    const setImage = ( { url, alt }: UploadImage ) => {
        setAttributes( { backgroundImage: url, backgroundImageAlt: alt } )
    }

    const setVideo = ({ url }: UploadVideo ) => {
        setAttributes( { backgroundVideo: url } )
    }

    const setPoster = ( { url, alt }: UploadImage ) => {
        setAttributes( { posterImage: url, posterImageAlt: alt } )
    }

    return (
        <>
            <InspectorControls key="setting">
				<Panel header="My panel">
					<PanelBody
						title={ __( 'Background', THEME_TEXT_DOMAIN ) }
						icon={ more }
						initialOpen={ true }
					>
						<PanelRow>
							<div>
								<BackgroundFields
									type={ bgType }
									setType={ setType }
									setImage={ setImage }
									setVideo={ setVideo }
									setPoster={ setPoster }
								/>
							</div>
						</PanelRow>
					</PanelBody>

					<PanelBody
						title={ __( 'Content', THEME_TEXT_DOMAIN ) }
						icon={ more }
						initialOpen={ true }
					>
						<InputControl
							label={ __( 'Kicker', THEME_TEXT_DOMAIN ) }
							value={ kicker }
							placeholder={ __( 'Type Kicker', THEME_TEXT_DOMAIN ) }
							onChange={ ( value: string ) => setKicker( value ?? '' ) }
						/>

						<InputControl
							label={ __( 'Title', THEME_TEXT_DOMAIN ) }
							value={ title }
							placeholder={ __( 'Type Title', THEME_TEXT_DOMAIN ) }
							onChange={ ( value: string ) => setTitle( value ?? '' ) }
						/>

						<InputControl
							label={ __( 'Subtitle', THEME_TEXT_DOMAIN ) }
							value={ subtitle }
							placeholder={ __( 'Type Subtitle', THEME_TEXT_DOMAIN ) }
							onChange={ ( value: string ) => setSubtitle( value ?? '' ) }
						/>

						<TextareaControl
							label={ __( 'Description', THEME_TEXT_DOMAIN ) }
							value={ description }
							help={ __( 'Type Description', THEME_TEXT_DOMAIN ) }
							onChange={ ( value: string ) => setDescription( value ?? '' ) }
						/>
					</PanelBody>
				</Panel>
            </InspectorControls>

            <section { ...blockProps }>
                <SectionBackground
                    type={ bgType }
                    imageSrc={ backgroundImage }
                    imageAlt={ backgroundImageAlt }
                    videoSrc={ backgroundVideo }
                    videoPoster={ posterImage }
                />

                <div className="section__body">
                    <div className="container">
                        <div className="section-hero__content">
							<div className="section-hero__top">
								<div className="subtitle section-hero__note">
									{ kicker }
								</div>

								<div className="section-hero__bread-crumbs">

								</div>
							</div>

							<div className="section-hero__main decor-line">
								<div className="section-title section-title--style1 section-hero__title section-title--white">
									<h1>
										{ title }
									</h1>
								</div>

								<div className="subtitle section-hero__subtitle">
									{ subtitle }
								</div>

								<div className="section-hero__description text-content text-content--white">
									<p>
										{ description }
									</p>
								</div>

								<div className="buttons-wrap section-hero__buttons-container">
									<a
										className="button button--fill"
										href="#"
										target="__blank"
									>
										<span className="button__text">
											Button
										</span>
									</a>
								</div>
							</div>

							<div className="scroll-down section-hero__scroll">
								<button className="button button--scroll-down js-scroll-to-next-section">
									<span className="icon icon-wrap button--scroll-down-icon">
										{/*{ LongArrow }*/}
									</span>
								</button>

								<div className="scroll-down__text js-scroll-to-next-section">
									{ __( 'SCROLL DOWN', THEME_TEXT_DOMAIN ) }
								</div>
							</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IntroEdit
