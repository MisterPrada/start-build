/**
 * Internal Dependencies
 */
import resetBlockEvents from "../modules/editor";

export const initScript = ( sectionSelector, blockName, callback ) => {
    const initializeBlock = function ( section = false ) {
        const $sections = section ? $( section ) : $( sectionSelector );

        $sections.each( callback )
    };

    window.acf.addAction("ready", function () {
        if ( window.acf.isGutenberg() ) {
            // Site Editor
            window.acf.addAction(
                `render_block_preview/type=${ blockName }`,
                resetBlockEvents( initializeBlock, sectionSelector )
            );
        } else {
            // Front-end
            $(document).ready(function(){
                initializeBlock();
            });
        }
    });
}