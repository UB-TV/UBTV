<?php
namespace Database\Seeders;

use App\Models\User;
use App\Enums\RolesEnum;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    public function run(): void {
        foreach (config('app.seeded_users') as $email) {
            $user = User::create([
                'email'        => $email,
                'identity'     => fake()->unique()->bothify('?????-#####'),
                'name'         => 'Budak Developer Mirza',
                'phone_number' => fake()->unique()->e164PhoneNumber(),
            ]);
            $user->assignRole(RolesEnum::HEAD_OF_PROGRAM);
        }
    }
}
