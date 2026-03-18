<?php
// This file is generated. Do not modify it manually.
return array(
	'multidots-cta' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/multidots-cta',
		'version' => '0.1.0',
		'title' => 'This is a CTA block',
		'category' => 'design',
		'icon' => 'feedback',
		'description' => 'A simple call to action block.',
		'keywords' => array(
			'call to action',
			'cta',
			'multidots',
			'marketing'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => true,
			'color' => array(
				
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'align' => true,
			'anchor' => true
		),
		'attributes' => array(
			'content' => array(
				'type' => 'string',
				'source' => 'html',
				'selector' => 'div'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
					'color' => array(
						'text' => '#1f1f1f',
						'background' => '#ffeda3'
					),
					'spacing' => array(
						'padding' => array(
							'top' => '20px',
							'right' => '20px',
							'bottom' => '20px',
							'left' => '20px'
						),
						'margin' => array(
							'top' => '0px',
							'right' => '0px',
							'bottom' => '0px',
							'left' => '0px'
						)
					),
					'typography' => array(
						'fontSize' => '16px',
						'lineHeight' => '1.5'
					)
				)
			)
		),
		'textdomain' => 'multidots-cta',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
