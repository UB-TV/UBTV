<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Video;
use App\Models\Episode;
use App\Models\Program;
use App\Models\Notification;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

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
        ])->assignRole('producer');
        $users[] = User::create([
            'email' => 'agustianto.d19@gmail.com',
            'name' => 'Faiz cape html',
            'phone_number' => '0822222222',
            'employee_id' => 'EMP-2121-0000',
            'is_active' => true,
        ])->assignRole('mcr');
        $users[] = User::create([
            'email' => 'achmalpradiptaaditama@gmail.com',
            'name' => 'Achmal test',
            'phone_number' => '0833333333',
            'employee_id' => 'EMP-2323-0000',
            'is_active' => true,
        ])->assignRole('admin');

        User::factory()->create([
            'is_active' => null,
        ]);

        $programs = Program::factory(10)->create();
        foreach ($programs as $program) {
            $episodes = Episode::factory(rand(5, 10))
                ->create(['program_id' => $program->id]);
            foreach ($episodes as $episode) {
                Video::factory(rand(3, 8))
                    ->create(['episode_id' => $episode->id]);
            }
        }

        // Assign random Videos to each predefined User
        $videos = Video::all();

        foreach ($users as $user) {
            $randomVideos = $videos->random(rand(5, 15));
            foreach ($randomVideos as $video) {
                $user->videos()->attach($video->id);
            }
        }

        $users = User::all();
        $programs = Program::all();
        $roles = Role::all();

        foreach ($users as $user) {
            // Randomly assign programs and episodes to notifications
            $program = $programs->random();
            $episode = $program->episodes->random();
            $role = $roles->random();

            Notification::create([
                'user_id' => $user->id,
                'program_id' => $program->id,
                'episode_id' => $episode->id,
                'role_id' => $role->id,
                'message' => "Notification for user {$user->name} on program {$program->name}",
            ]);
        }
    }
}
