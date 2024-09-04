<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([RoleSeeder::class]);
        User::create([
            'email' => 'miruza.dev@gmail.com',
            'name' => 'Mirza pengen Event-Driven',
            'phone_number' => '0811111111',
            'employee_id' => 'EMP-2020-0000',
        ])->assignRole('editor');
    }
}
