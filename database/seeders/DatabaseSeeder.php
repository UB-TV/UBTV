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

        $users = [];
        $users[] = User::create([
            'email' => 'miruza.dev@gmail.com',
            'name' => 'Mirza pengen Event-Driven',
            'phone_number' => '0811111111',
            'employee_id' => 'EMP-2020-0000',
            'is_active' => true,
        ])->assignRole('editor');
        $users[] = User::create([
            'email' => 'agustianto.d19@gmail.com',
            'name' => 'Faiz cape html',
            'phone_number' => '0822222222',
            'employee_id' => 'EMP-2121-0000',
        ])->assignRole('cameraman');

        Program::factory()
            ->has(Episode::factory()->count(3)
            ->has(Video::factory()->count(5)))->create();
        Program::factory()
            ->has(Episode::factory()->count(3)
            ->has(Video::factory()->count(5)))->create();
        Program::factory()
            ->has(Episode::factory()->count(3)
            ->has(Video::factory()->count(5)))->create();

        foreach ($users as $user) {
            $user->videos()->attach(Video::query()->limit(5)->get()->pluck('id'));
        }
    }
}
