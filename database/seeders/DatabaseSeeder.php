<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Video;
use App\Models\Episode;
use App\Models\Program;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RoleSeeder::class]);
        $user = User::create([
            'email' => 'miruza.dev@gmail.com',
            'name' => 'Mirza pengen Event-Driven',
            'phone_number' => '0811111111',
            'employee_id' => 'EMP-2020-0000',
        ])->assignRole('cameraman');

        Program::factory()
            ->has(Episode::factory()
            ->has(Video::factory()->count(5)))->create();
        Program::factory()
            ->has(Episode::factory()
            ->has(Video::factory()->count(5)))->create();
        Program::factory()
            ->has(Episode::factory()
            ->has(Video::factory()->count(5)))->create();

        $user->videos()->attach(Video::query()->limit(5)->get()->pluck('id'));
    }
}
