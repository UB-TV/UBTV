<?php

namespace Database\Factories;

use Illuminate\Support\Str;
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
        $name = fake()->unique()->sentence(3);
        return [
            'code' => fake()->regexify('[A-Z]{5}[0-4]{3}'),
            'slug' => Str::slug($name),
            'name' => $name,
            'description' => fake()->paragraph(),
            'is_active' => fake()->boolean(),
            'premiere_at' => fake()->dateTimeBetween('+0 days', '+1 years'),
        ];
    }
}
