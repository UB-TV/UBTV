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
            'episode_id' => ['required', 'integer', 'numeric'],
            'attachment' => ['required', File::types(['mp4','mkv','mov', 'webm'])],
        ];
    }
}
