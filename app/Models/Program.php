<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

/**
 *
 *
 * @property int $id
 * @property string $code
 * @property string $slug
 * @property string $name
 * @property string $description
 * @property bool $is_active
 * @property string $premiere_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Episode> $episodes
 * @property-read int|null $episodes_count
 * @method static \Database\Factories\ProgramFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Program newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Program newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Program query()
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program wherePremiereAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Program whereUpdatedAt($value)
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Video> $videos
 * @property-read int|null $videos_count
 * @property-read \App\Models\Episode|null $latestEpisode
 * @mixin \Eloquent
 */
class Program extends Model
{
    use HasFactory;

    protected $casts = [
        'is_active' => 'boolean',
    ];


    protected $fillable = [
        'code',
        'slug',
        'name',
        'description',
        'is_active',
        'premiere_at',
    ];

    public function episodes(): HasMany
    {
        return $this->hasMany(Episode::class);
    }

    public function latestEpisode(): HasOne
    {
        return $this->hasOne(Episode::class)->latestOfMany("created_at");
    }

    public function videos(): HasManyThrough
    {
        return $this->hasManyThrough(Video::class, Episode::class);
    }
}
