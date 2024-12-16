<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Video;
use App\Models\Episode;
use App\Models\Program;
use App\Enums\StatusEnum;
use App\Models\Notification;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
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
        ])->assignRole('mcr');
        $users[] = User::create([
            'email' => 'agustianto.d19@gmail.com',
            'name' => 'Faiz cape html',
            'phone_number' => '0822222222',
            'employee_id' => 'EMP-2121-0000',
            'is_active' => true,
        ])->assignRole('editor');
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

        $programs = Program::factory()->count(2)->create();

        // Seed Episodes
        foreach ($programs as $program) {
            Episode::factory()->count(2)->create([
                'program_id' => $program->id,
            ]);
        }
        foreach ($programs as $program) {
            Episode::factory()->count(2)->create([
                'program_id' => $program->id,
                'status' => StatusEnum::MCR_VALIDATION
            ]);
        }

        // Seed Videos
        $episodes = $programs->random()->episodes;
        foreach ($episodes as $episode) {
            Video::factory()->count($episode->segment_count)->create([
                'episode_id' => $episode->id,
            ]);
        }

        // Seed User_Video Pivot Table
        foreach ($users as $user) {
            foreach ($episodes as $episode) {
                if ($episode->videos === null) {
                    continue;
                }
                foreach ($episode->videos as $video) {
                    DB::table('user_video')->insert([
                        'user_id' => $user->id,
                        'video_id' => $video->id,
                    ]);
                }
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
