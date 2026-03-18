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
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true
			),
			'shadow' => true,
			'html' => true,
			'color' => array(
				'text' => true,
				'background' => true
			),
			'spacing' => array(
				'padding' => true,
				'margin' => true
			),
			'align' => true,
			'anchor' => true
		),
		'attributes' => array(
			'textColor' => array(
				'type' => 'string',
				'default' => 'contrast'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'base'
			),
			'style' => array(
				'type' => 'object',
				'default' => array(
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
		'parent' => array(
			'core/post-content'
		),
		'textdomain' => 'multidots-cta',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
