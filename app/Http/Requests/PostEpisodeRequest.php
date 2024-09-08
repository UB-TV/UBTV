<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostEpisodeRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'code' => ['required'],
            'duration' => ['required'],
            'themes' => ['required'],
            'start_production' => ['required'],
            'description' => ['required'],
        ];
    }
}
