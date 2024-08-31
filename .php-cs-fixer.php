<?php

use PhpCsFixer\Config;
use PhpCsFixer\Finder;

$rules = [
    '@PSR12' => true,
    'array_syntax' => ['syntax' => 'short'],
    'no_unused_imports' => true,
    'ordered_imports' => [
        'sort_algorithm' => 'length',
    ],
];

$finder = (new Finder())
    ->in(__DIR__);

return (new Config())
    ->setRules($rules)
    ->setFinder($finder);
