<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class PostEpisodeSegmentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'episode_id' => ['required', 'integer', 'numeric'],
            'segment_number' => ['required', 'integer', 'numeric'],
            'attachment' => ['required', File::types(['mp4','mkv','mov', 'webm'])],
        ];
    }
}
