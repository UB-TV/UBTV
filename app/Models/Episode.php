<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * 
 *
 * @property int $id
 * @property int $program_id
 * @property string $code
 * @property int $duration
 * @property string $theme
 * @property int $segment_count
 * @property string $start_production
 * @property string $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Video> $videos
 * @property-read int|null $videos_count
 * @method static \Database\Factories\EpisodeFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|Episode newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Episode newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Episode query()
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereDuration($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereProgramId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereSegmentCount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereStartProduction($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereTheme($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Episode whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Episode extends Model
{
    use HasFactory;
    public function videos(): HasMany
    {
        return $this->hasMany(Video::class);
    }
}
