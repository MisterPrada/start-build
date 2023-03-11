<?php
/**
 * Bennet Component Video
 *
 * @var array $block The block settings and attributes.
 * @var string $content The block inner HTML (empty).
 * @var bool $is_preview True during AJAX preview.
 * @var $post_id (int|string) The post ID this block is saved to.
 */

/**
 * Block preview image
 */
if ( isset( $block['data']['block_preview_images'] ) ) {
	hm_get_template_part_with_params( 'fragments/block-preview-image', ['block' => $block] );
	return;
}

/**
 * Block Variables
 */
$video = get_field( 'video' );
$preview_id = get_field( 'preview' );

get_template_part( 'fragments/common/video', '', [ 'video' => $video, 'preview_id' => $preview_id ] );
?>
