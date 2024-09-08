<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Episode>
 */
class EpisodeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => fake()->regexify('[A-Z]{5}[0-4]{3}'),
            'duration' => fake()->lexify(),
            'themes' => fake()->lexify(),
            'start_production' => fake()->dateTimeBetween('+0 days', '+1 years'),
            'description' => fake()->paragraph(),
        ];
    }
}
