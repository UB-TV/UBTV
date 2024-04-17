<?php
namespace App\Http\Middleware;

use App\Models\User;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware {
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $req): string | null {
        return parent::version($req);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $req): array {
        return [
             ...parent::share($req),
            'user'  => User::clean($req->user()),
            'ziggy' => fn() => [
                 ...(new Ziggy)->toArray(),
                'location' => $req->url(),
            ],
        ];
    }
}
