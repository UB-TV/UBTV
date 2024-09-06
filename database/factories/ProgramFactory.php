<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Program>
 */
class ProgramFactory extends Factory
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
            'name' => fake()->sentence(3),
            'description' => fake()->paragraph(),
            'is_active' => fake()->boolean(),
            'premiere_at' => fake()->dateTimeBetween('+0 days', '+1 years'),
        ];
    }
}
