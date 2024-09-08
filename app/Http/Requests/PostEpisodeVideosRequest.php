<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class PostEpisodeVideosRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'videos' => ['required', 'array:episode_id,attachment'],
            'videos.episode_id' => ['required', 'integer', 'numeric'],
            'videos.attachment' => ['required', File::types(['mp4','mkv','mov'])],
        ];
    }
}
